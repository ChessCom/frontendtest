import { Ref, ref } from 'vue'

type Square = {
  displayValue: string
  selected: boolean
}

const getDisplayValue = (rank: number, file: number) => {
  const char = 'abcdefgh'[file]
  return `${char}${rank + 1}`
}

const generateSquares = () => {
  return Array.from(Array(8), (_, rank) => {
    return Array.from(
      Array(8),
      (_, file): Square => ({
        displayValue: getDisplayValue(7 - rank, file),
        selected: false,
      })
    )
  })
}

const squares = ref(generateSquares())
const moves: Ref<Square[]> = ref([])

export const useSquares = () => {
  const selectSquare = (square: Square) => {
    if (!square.selected) {
      square.selected = true
      moves.value.push(square)
    }
  }

  return {
    selectSquare,
    squares,
    moves,
  }
}
