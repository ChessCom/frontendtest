<template>
  <div class="chessboard">
    <div v-for="(row, rowIndex) in 8" :key="`row-${rowIndex}`" class="row">
      <div v-for="(col, colIndex) in 8" :key="`col-${colIndex}`"
           class="square"
           :class="{ selectedSquare: selectedSquare.row === rowIndex && selectedSquare.col === colIndex }"
           @click="selectSquare(rowIndex, colIndex)">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue';

interface Square {
  row: number;
  col: number;
}

const emit = defineEmits<{
  (event: 'squareSelected', square: Square): void;
}>();

const selectedSquare = ref<Square>({ row: -1, col: -1 });

const selectSquare = (row: number, col: number) => {
  selectedSquare.value = { row, col };
  emit('squareSelected', { row, col });
};
</script>

<style scoped>
.chessboard {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 2px;
}
.row {
  display: contents;
}
.square {
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative;
  background-color: #eee; /* Default color */
}
/* Alternate square colors */
.row:nth-child(odd) .square:nth-child(even)::before,
.row:nth-child(even) .square:nth-child(odd)::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333; /* Alternate color */
}
.selected {
  outline: 2px solid yellow; /* Highlight effect for selected square */
}
</style>