<template>
  <div ref="parentRef" class="chessboard-container">
    <canvas ref="canvasRef" @click="handleClick" width="400" height="400"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect, onUnmounted } from 'vue'
import { useClickSquareStore } from '@/stores/squares'

// Define types
type TSquare = {
  id: number
  row: number
  col: number
}
type CanvasContext = CanvasRenderingContext2D

// Define constants to avoid magic numbers
const NUMBER_OF_SQUARES = 8
const BLACK_SQUARE_COLOR = '#739552'
const WHITE_SQUARE_COLOR = '#ebecd0'
const HIGHLIGHT_SQUARE_COLOR = '#38dcff'
const LINE_STROKE_WIDTH = 4
const LABEL_POSITION_PROPORTION = 6
const LABEL_OFFSET_PROPORTION = 0.9
const HALF = 2

// Reactive references for canvas and parent elements
const canvasRef = ref<HTMLCanvasElement | null>(null)
const parentRef = ref<HTMLElement | null>(null)

// Extract methods from the store
const { addClickedSquare, clickedSquares } = useClickSquareStore()

// Handle click events on the canvas
const handleClick = (event: MouseEvent) => {
  try {
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
      const squareObject = { id: clickedSquares.length, row: row, col: col }
      addClickedSquare(squareObject)
      setCurrentSquare(squareObject)
    }
  } catch (error) {
    console.error('Error on handleClick: ', error)
  }
}

const getCanvasContextSquareSize = (): {
  canvas: HTMLCanvasElement
  context: CanvasContext
  squareSize: number
} | null => {
  try {
    // Check if the canvas and parent elements are available
    const canvas = canvasRef.value
    const parent = parentRef.value

    // If not, return
    if (!canvas || !parent) return null

    // Get the dimensions of the parent element
    const { clientHeight, clientWidth } = parent

    // Get the device pixel ratio to avoid blurry canvas
    const devicePixelRatio = window.devicePixelRatio || 1

    // Get the smaller dimension of the parent element to make the canvas square
    const smallerDimension = Math.min(clientWidth, clientHeight)

    // Calculate the size of each square to fit the canvas
    const squareSize = smallerDimension / NUMBER_OF_SQUARES

    // Set the canvas dimensions and style to fit the parent element
    // Device pixel ratio is used to avoid canvas blurriness
    canvas.width = squareSize * NUMBER_OF_SQUARES * devicePixelRatio
    canvas.height = squareSize * NUMBER_OF_SQUARES * devicePixelRatio

    canvas.style.width = `${smallerDimension}px`
    canvas.style.height = `${smallerDimension}px`

    // Get the canvas context and return if it is not available
    let context = canvas?.getContext('2d')
    if (!context) return null

    // Scale the canvas to fit the canvas new size
    context.scale(devicePixelRatio, devicePixelRatio)

    // Disable image smoothing to avoid blurriness
    context.imageSmoothingEnabled = false
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height)

    return { canvas, context, squareSize }
  } catch (error) {
    console.error('Error trying to get canvas, context and square size: ', error)
    return null
  }
}

// Draw a square on the canvas
const drawSquare = (context: CanvasContext, squareSize: number, row: number, col: number) => {
  // Set the fill style of the square
  context.fillStyle = (row + col) % 2 === 0 ? WHITE_SQUARE_COLOR : BLACK_SQUARE_COLOR
  // Draw the square on the canvas
  context.fillRect(col * squareSize, row * squareSize, squareSize, squareSize)
}

// Highlight a square on the canvas
const highlightSquare = (context: CanvasContext, squareSize: number, row: number, col: number) => {
  // Set the stroke style and line width of the highlighted square
  context.strokeStyle = HIGHLIGHT_SQUARE_COLOR
  context.lineWidth = LINE_STROKE_WIDTH
  // Calculate the offset and inner square size to draw the highlighted square
  let offset = LINE_STROKE_WIDTH / HALF
  let innerSquareSize = squareSize - LINE_STROKE_WIDTH
  // Draw the highlighted square on the canvas
  context.strokeRect(
    col * squareSize + offset,
    row * squareSize + offset,
    innerSquareSize,
    innerSquareSize
  )
}

// Draw all squares on the canvas and highlight the current square
const drawAllSquares = (
  context: CanvasContext,
  squareSize: number,
  currentSquare: TSquare | null
) => {
  //
  for (let row = 0; row < NUMBER_OF_SQUARES; row++) {
    for (let col = 0; col < NUMBER_OF_SQUARES; col++) {
      // Draw each square
      drawSquare(context, squareSize, row, col)
      // Highlight the current square if it exists
      if (currentSquare && currentSquare.row === row && currentSquare.col === col) {
        highlightSquare(context, squareSize, row, col)
      }
    }
  }
}

const drawLabelsOnSquares = (squareSize: number, context: CanvasContext) => {
  // Define the column labels to be displayed on the chessboard
  const columnLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  // Draw the column labels on the chessboard
  for (let columnIndex = 0; columnIndex < NUMBER_OF_SQUARES; columnIndex++) {
    // Define the position of the column label
    const columnLabel = columnLabels[columnIndex]
    // Calculate the position of the column label
    const labelX = (columnIndex + LABEL_OFFSET_PROPORTION) * squareSize
    // Calculate the position of the row label
    const labelY =
      (NUMBER_OF_SQUARES - 1 - columnIndex) * squareSize + squareSize / LABEL_POSITION_PROPORTION
    // Calculate the font size of the label to be responsive
    const labelFontSize = squareSize / LABEL_POSITION_PROPORTION

    // Set the font style and fill style of the label
    context.font = `${labelFontSize}px Arial`
    context.fillStyle = columnIndex % 2 === 0 ? WHITE_SQUARE_COLOR : BLACK_SQUARE_COLOR
    context.fillText(columnLabel, labelX - 2, squareSize * NUMBER_OF_SQUARES - 2)
    context.fillText(`${1 + columnIndex}`, 2, labelY)
  }
}

// Draw the chessboard
const drawChessboard = (currentSquare: TSquare | null) => {
  try {
    const { canvas, context, squareSize } = getCanvasContextSquareSize() || {}
    if (!canvas || !context || !squareSize) return
    // Define the size of each square
    // Draw the chessboard squares
    drawAllSquares(context, squareSize, currentSquare)
    drawLabelsOnSquares(squareSize, context)
  } catch (error) {
    console.error('Error on drawing the chessboard: ', error)
  }
}

// Run drawChessboard function when the component is mounted and when the window is resized
const redrawChessboard = () => {
  // Get the current square from the store to keep track of the highlighted square
  const { currentSquare } = useClickSquareStore()
  try {
    drawChessboard(currentSquare)
  } catch (error) {
    console.error('Error on redrawing the chessboard:', error)
  }
}

onMounted(() => {
  redrawChessboard()
  window.addEventListener('resize', redrawChessboard)
})

// Run drawChessboard function whenever the currentSquare changes
watchEffect(() => {
  const { currentSquare } = useClickSquareStore()
  drawChessboard(currentSquare)
})

// Remove the event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener('resize', redrawChessboard)
})
</script>

<style scoped>
.chessboard-container {
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
