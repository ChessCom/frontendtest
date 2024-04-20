<template>
  <div ref="parentRef" class="parent-chessboard">
    <canvas ref="canvasRef" @click="handleClick" width="400" height="400"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { useClickSquareStore } from '@/stores/squares'

// Define types
type Square = {
  row: number
  col: number
}
type CanvasContext = CanvasRenderingContext2D

// Define constants to avoid magic numbers
const NUMBER_OF_SQUARES = 8
const BLACK_SQUARE_COLOR = '#739552'
const WHITE_SQUARE_COLOR = '#ebecd0'
const HIGHLIGHT_SQUARE_COLOR = '#38dcff'
const LINE_STROKE_WIDTH = 3

// Reactive references for canvas and parent elements
const canvasRef = ref<HTMLCanvasElement | null>(null)
const parentRef = ref<HTMLElement | null>(null)

// Extract methods from the store
const { addClickedSquare } = useClickSquareStore()

// Handle click events on the canvas
const handleClick = (event: MouseEvent) => {
  const { currentSquare, setCurrentSquare } = useClickSquareStore()
  event.stopPropagation()

  if (!canvasRef.value) return

  const rect = canvasRef.value.getBoundingClientRect()
  const squareSize = rect.width / NUMBER_OF_SQUARES
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  const col = Math.floor(x / squareSize)
  const row = Math.floor(y / squareSize)

  if (currentSquare?.row === row && currentSquare?.col === col) {
    setCurrentSquare(null)
  } else {
    addClickedSquare({ row: row, col: col })
    setCurrentSquare({ row: row, col: col })
  }
}

// Draw labels on squares
const drawLabelsOnSquares = (squareSize: number, context: CanvasContext) => {
  const columnLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  const positionProportion = 6
  const labelOffset = 2

  for (let columnIndex = 0; columnIndex < NUMBER_OF_SQUARES; columnIndex++) {
    const columnLabel = columnLabels[columnIndex]
    const labelX = (columnIndex + 0.9) * squareSize
    const labelY =
      (NUMBER_OF_SQUARES - 1 - columnIndex) * squareSize + squareSize / positionProportion
    const labelFontSize = squareSize / positionProportion

    context.font = `${labelFontSize}px Arial`

    context.fillStyle = columnIndex % 2 === 0 ? WHITE_SQUARE_COLOR : BLACK_SQUARE_COLOR
    context.fillText(
      columnLabel,
      labelX - labelOffset,
      squareSize * NUMBER_OF_SQUARES - labelOffset
    )

    context.fillStyle = columnIndex % 2 === 0 ? WHITE_SQUARE_COLOR : BLACK_SQUARE_COLOR
    context.fillText(`${1 + columnIndex}`, labelOffset, labelY)
  }
}

// Draw the chessboard
const drawChessboard = (currentSquare: Square | null) => {
  if (!canvasRef.value || !parentRef.value) return
  const parentWidth = parentRef.value.clientWidth
  const parentHeight = parentRef.value.clientHeight
  const devicePixelRatio = window.devicePixelRatio || 1
  let canvas = canvasRef.value

  const smallerDimension = Math.min(parentWidth, parentHeight)
  const squareSize = smallerDimension / NUMBER_OF_SQUARES

  canvas.width = squareSize * NUMBER_OF_SQUARES * devicePixelRatio
  canvas.height = squareSize * NUMBER_OF_SQUARES * devicePixelRatio
  // I use this to avoid a blurry canvas

  canvas.style.width = `${smallerDimension}px`
  canvas.style.height = `${smallerDimension}px`

  let context = canvas?.getContext('2d')
  if (!context) return
  context.scale(devicePixelRatio, devicePixelRatio)
  context.imageSmoothingEnabled = false

  context.clearRect(0, 0, canvas.width, canvas.height)

  for (let row = 0; row < NUMBER_OF_SQUARES; row++) {
    for (let col = 0; col < NUMBER_OF_SQUARES; col++) {
      if ((row + col) % 2 === 0) {
        context.fillStyle = WHITE_SQUARE_COLOR
      } else {
        context.fillStyle = BLACK_SQUARE_COLOR
      }

      context.fillRect(col * squareSize, row * squareSize, squareSize, squareSize)

      if (currentSquare && currentSquare.row === row && currentSquare.col === col) {
        context.strokeStyle = HIGHLIGHT_SQUARE_COLOR
        context.lineWidth = LINE_STROKE_WIDTH
        context.strokeRect(col * squareSize, row * squareSize, squareSize, squareSize)
      }
    }
  }
  drawLabelsOnSquares(squareSize, context)
}

// Run drawChessboard function when the component is mounted and when the window is resized
onMounted(() => {
  const { currentSquare } = useClickSquareStore()
  drawChessboard(currentSquare)

  window.addEventListener('resize', () => {
    const { currentSquare } = useClickSquareStore()
    drawChessboard(currentSquare)
  })
})

// Run drawChessboard function whenever the currentSquare changes
watchEffect(() => {
  const { currentSquare } = useClickSquareStore()
  drawChessboard(currentSquare)
})
</script>

<style scoped>
.parent-chessboard {
  width: 95%;
  height: 95%;
  margin: auto;
  display: flex;
  justify-content: center;
}

canvas {
  display: block;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
</style>
