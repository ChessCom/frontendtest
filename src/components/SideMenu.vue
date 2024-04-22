<template>
  <div id="side-menu" class="side-menu">
    <div id="title-holder" class="side-menu-title">
      <span class="side-menu-title-label">Square Clicked</span>
      <div class="underline-border" />
    </div>
    <div class="table-container" v-if="clickedSquares.length">
      <!-- Display the clicked squares in reverse order -->
      <TableItem
        v-for="(square, index) in reversedSquares"
        :key="index"
        :square="translateSquarePosition(square.col, square.row)"
        :clickIndex="reversedSquares.length - index"
        :isSelected="selectedItem === clickIndex - index"
        @click="handleRowSelection(square.col, square.row, clickIndex - index)"
      />
    </div>
    <!-- Display a message if no squares have been clicked -->
    <div v-else>
      <TableItem :square="noSquaresSelected" :isClickDisabled="true" />
    </div>
  </div>
</template>
<script setup lang="ts">
// Import necessary functions and components
import { ref, computed, watchEffect } from 'vue'
import { useClickSquareStore } from '@/stores/squares'
import TableItem from './TableItem.vue'

// Computed property to reverse the order of clicked squares
const reversedSquares = computed(() => clickedSquares.slice().reverse())

// Reference for the currently selected item
const selectedItem = ref<number | null>(null)
const noSquaresSelected = 'No squares clicked yet.'

// Access to clicked squares store
const { setCurrentSquare, clickedSquares } = useClickSquareStore()

// Define constants to avoid magic numbers
const NUMBER_OF_SQUARES = 8

const handleRowSelection = (col: number, row: number, index: number) => {
  setCurrentSquare({ id: index, col: col, row: row })
  selectedItem.value = index
}

// Watch for changes in the current square and update isSelected
watchEffect(() => {
  const { currentSquare } = useClickSquareStore()
  if (currentSquare) selectedItem.value = currentSquare.id
})

// Function to translate square position to algebraic notation
const translateSquarePosition = (colIndex: number, rowIndex: number): string => {
  const columnLetter = String.fromCharCode(97 + colIndex)
  const rowNumber = NUMBER_OF_SQUARES - rowIndex
  return `${columnLetter}${rowNumber}`
}

// Computed property to calculate the click index
const clickIndex = computed(() => reversedSquares.value.length - 1)
</script>

<style scoped>
/* Side menu container */
.side-menu {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  height: 100%;
  background-color: var(--color-background);
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.1rem 0 var(rgba(0, 0, 0, 0.2));
}

/* Side menu title and label */
.side-menu-title {
  display: flex;
  justify-content: center;
  position: relative;
  height: 5.6rem;
  font-size: 1.4rem;
  border-bottom: 1px solid var(--color-border-white);
}

.side-menu-title-label {
  align-self: center;
}

/* Underline border for the title */
.underline-border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.3rem;
  background-color: var(--color-border-white);
}

/* Table container */
.table-container {
  max-height: calc(100% - 6.1rem);
  overflow: auto;
}
</style>
