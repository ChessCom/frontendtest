<template>
  <div class="text-center">
    <h1 class="text-chess-primary text-2xl md:text-3xl font-semibold mb-4">Chess Board</h1>
    <div class="grid grid-cols-8 w-full max-w-full md:max-w-lg mx-auto overflow-hidden shadow-lg">
      <div
        v-for="(square, index) in squares"
        :key="index"
        :class="[
          'aspect-square flex items-center justify-center font-bold text-sm md:text-xs cursor-pointer transition-all duration-200 select-none relative hover:opacity-80 hover:scale-105 hover:z-10',
          isHighlighted(square) ? 'bg-board-highlight border-2 border-chess-primary text-white font-bold shadow-lg' : getSquareClass(square)
        ]"
        @click="handleSquareClick(square)"
        :style="isHighlighted(square) ? 'box-shadow: 0 0 10px rgba(105, 146, 62, 0.5) !important;' : ''"
      >
        {{ square }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['square-clicked'])

// Generate chess squares
const squares = computed(() => {
  const result = []
  for (let rank = 8; rank >= 1; rank--) {
    for (let file = 0; file < 8; file++) {
      const square = String.fromCharCode(97 + file) + rank
      result.push(square)
    }
  }
  return result
})

const highlightedSquares = ref(new Set())

const getSquareClass = (square) => {
  const file = square.charCodeAt(0) - 97 // a=0, b=1, etc.
  const rank = parseInt(square[1]) - 1    // 1=0, 2=1, etc.
  return (file + rank) % 2 === 0 ? 'bg-board-light text-board-dark' : 'bg-board-dark text-board-light'
}

const isHighlighted = (square) => {
  return highlightedSquares.value.has(square)
}

const handleSquareClick = (square) => {
  highlightedSquares.value.add(square)
  emit('square-clicked', square)
}

const resetBoard = () => {
  highlightedSquares.value = new Set()
}

defineExpose({
  resetBoard
})
</script>