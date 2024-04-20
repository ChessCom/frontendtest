<template>
  <div id="side-menu" class="side-menu">
    <div id="title-holder" class="side-menu-title">
      <span class="side-menu-title-label">Square Clicked</span>
      <div class="underline-border" />
    </div>
    <div class="table-container" v-if="clickedSquares.length">
      <TableItem
        v-for="(square, index) in clickedSquares"
        :key="index"
        :square="translateSquarePosition(square.col, square.row)"
        :clickIndex="index + 1"
        @click="handleRowSelection(square.col, square.row, index)"
      />
    </div>
    <div v-else>
      <TableItem :square="'No squares clicked yet.'" :isClickDisabled="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useClickSquareStore } from '@/stores/squares'
import TableItem from './TableItem.vue'

// Reference for the currently selected item
const selectedItem = ref<number | null>(null)
// Access to clicked squares store
const { setCurrentSquare, clickedSquares } = useClickSquareStore()

// Define constants to avoid magic numbers
const NUMBER_OF_SQUARES = 8

const handleRowSelection = (col: number, row: number, index: number) => {
  setCurrentSquare({ col: col, row: row })
  selectedItem.value = index
}

// Function to translate square position to algebraic notation
const translateSquarePosition = (colIndex: number, rowIndex: number): string => {
  const columnLetter = String.fromCharCode(97 + colIndex)
  const rowNumber = NUMBER_OF_SQUARES - rowIndex
  return `${columnLetter}${rowNumber}`
}
</script>

<style scoped>
.side-menu {
  background-color: var(--color-background);
  height: 100%;
}

.side-menu-title {
  height: 5.6rem;
  position: relative;
  display: flex;
  font-size: 1.4rem;
  border-bottom: 1px solid var(--color-border-white);
  justify-content: center;
}
.side-menu-title-label {
  align-self: center;
}
.underline-border {
  background-color: var(--color-border-white);
  bottom: 0;
  height: 0.3rem;
  left: 0;
  position: absolute;
  right: 0;
}
.table-container {
  max-height: calc(100% - 6.1rem);
  overflow: auto;
}
</style>
