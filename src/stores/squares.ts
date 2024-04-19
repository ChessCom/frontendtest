import { ref } from 'vue'
import { defineStore } from 'pinia'

type Square = {
  row: number
  col: number
}

export const useClickSquareStore = defineStore('clickSquare', () => {
  const clickedSquares = ref<Square[]>([])
  const currentSquare = ref<Square | null>(null)

  function addClickedSquare(square: Square) {
    clickedSquares.value.push(square)
  }

  function setCurrentSquare(square: Square | null) {
    currentSquare.value = square
  }

  return {
    clickedSquares,
    currentSquare,
    addClickedSquare,
    setCurrentSquare
  }
})
