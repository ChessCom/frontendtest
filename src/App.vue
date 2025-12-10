<template>
  <div id="app" class="min-h-screen w-full bg-gray-50">
    <div class="flex max-w-7xl mx-auto p-8 gap-8 min-h-screen items-start md:flex-row flex-col">
      <div class="flex-1 w-full md:max-w-2xl">
        <ChessBoard ref="chessBoardRef" @square-clicked="onSquareClick" />
      </div>
      <div class="w-full md:w-80 bg-white rounded-lg p-6 shadow-sm h-fit">
        <Sidebar :clicked-squares="clickedSquares" @reset="resetSquares" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChessBoard from './components/ChessBoard'
import Sidebar from './components/Sidebar'

const clickedSquares = ref([])

const onSquareClick = (square) => {
  clickedSquares.value.push({
    square,
    order: clickedSquares.value.length + 1,
    timestamp: new Date().toLocaleTimeString()
  })
}

const chessBoardRef = ref(null)

const resetSquares = () => {
  clickedSquares.value = []
  if (chessBoardRef.value) {
    chessBoardRef.value.resetBoard()
  }
}
</script>
