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

// Define constants that I use to avoid magic number
const NUMBER_OF_SQUARES = 8
const BLACK_SQUARE_COLOR = '#739552'
const WHITE_SQUARE_COLOR = '#ebecd0'
const HIGHLIGHT_SQUARE_COLOR = '#38dcff'
const LINE_STROKE_WIDTH = 5

// Creating reactive references for canvas and parent elements
const canvasRef = ref<HTMLCanvasElement | null>(null)
// I use canvasRef to compute everything inside the canvas itself
const parentRef = ref<HTMLElement | null>(null)
// I use parentRef to compute the height and width of the screen

// Extracting methods from the store
const { addClickedSquare } = useClickSquareStore()

// Function to handle click events on the canvas
const handleClick = (event: MouseEvent) => {
  const { currentSquare, setCurrentSquare } = useClickSquareStore()
  // Get new currentSquare and setCurrentSquare to avoid setting errors
  event.stopPropagation()
  // If canvas element doesn't exist, return
  if (!canvasRef.value) return

  // Get the position of the click relative to the canvas
  const rect = canvasRef.value.getBoundingClientRect()
  const squareSize = rect.width / NUMBER_OF_SQUARES
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  // Calculate the row and column of the clicked square
  const col = Math.floor(x / squareSize)
  const row = Math.floor(y / squareSize)

  // If the same square is clicked again, deselect it
  if (currentSquare?.row === row && currentSquare?.col === col) {
    setCurrentSquare(null)
  } else {
    // Otherwise, add the clicked square to the store and set it as current
    addClickedSquare({ row: row, col: col })
    setCurrentSquare({ row: row, col: col })
  }
}

const drawLabelsOnSquares = (squareSize: number, context: CanvasContext) => {
  const columnLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  const positionProportion = 6 // Proportion used for positioning labels
  const labelOffset = 2 // Offset for label positioning

  for (let columnIndex = 0; columnIndex < NUMBER_OF_SQUARES; columnIndex++) {
    const columnLabel = columnLabels[columnIndex]
    const labelX = (columnIndex + 0.9) * squareSize
    const labelY =
      (NUMBER_OF_SQUARES - 1 - columnIndex) * squareSize + squareSize / positionProportion
    const labelFontSize = squareSize / positionProportion

    context.font = `${labelFontSize}px Arial`

    // Set fill style based on column index
    context.fillStyle = columnIndex % 2 === 0 ? WHITE_SQUARE_COLOR : BLACK_SQUARE_COLOR
    context.fillText(
      columnLabel,
      labelX - labelOffset,
      squareSize * NUMBER_OF_SQUARES - labelOffset
    )

    // Set fill style based on row index
    context.fillStyle = columnIndex % 2 === 0 ? WHITE_SQUARE_COLOR : BLACK_SQUARE_COLOR
    context.fillText(`${1 + columnIndex}`, labelOffset, labelY)
  }
}

// Function to draw the chessboard on the canvas
const drawChessboard = (currentSquare: Square | null) => {
  if (!canvasRef.value || !parentRef.value) return
  const parentWidth = parentRef.value.offsetWidth
  const parentHeight = parentRef.value.offsetHeight
  const devicePixelRatio = window.devicePixelRatio || 1

  let canvas = canvasRef.value

  const smallerDimension = Math.min(parentWidth, parentHeight)
  // The board should be as small as possible between height and width, in order to occupy as much space as possible while maintaining the aspect ratio.
  const squareSize = smallerDimension / NUMBER_OF_SQUARES

  canvas.width = squareSize * NUMBER_OF_SQUARES * devicePixelRatio
  canvas.height = squareSize * NUMBER_OF_SQUARES * devicePixelRatio
  // I use this to avoid a blurry canvas

  canvas.style.width = `${smallerDimension}px`
  canvas.style.height = `${smallerDimension}px`

  let context = canvas?.getContext('2d')
  if (!context) return
  context.scale(devicePixelRatio, devicePixelRatio)
  // Scale the canvas to fit the new sizes

  context.imageSmoothingEnabled = false
  //  Prevents a blurry canvas

  context.clearRect(0, 0, canvas.width, canvas.height)
  // Clears the canvas to redraw it

  // Generate the squares in the canvas
  for (let row = 0; row < NUMBER_OF_SQUARES; row++) {
    for (let col = 0; col < NUMBER_OF_SQUARES; col++) {
      // Alternate square colors
      if ((row + col) % 2 === 0) {
        context.fillStyle = WHITE_SQUARE_COLOR
      } else {
        context.fillStyle = BLACK_SQUARE_COLOR
      }
      // Add Rect to the canvas
      context.fillRect(col * squareSize, row * squareSize, squareSize, squareSize)

      // Highlight the square if is the current one
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
/* Styles for the parent chessboard container */
.parent-chessboard {
  width: 95%;
  height: 95%;
  margin: auto;
  display: flex;
  justify-content: center;
}

/* Styles for the canvas */
canvas {
  display: block;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
</style>
