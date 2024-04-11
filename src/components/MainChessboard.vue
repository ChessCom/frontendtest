<template>
  <div class="chessboard">
    <div v-for="rowIndex in 8" :key="`row-${rowIndex}`" class="row">
      <div
        v-for="colIndex in 8"
        :key="`col-${colIndex}`"
        class="coordinate"
        :class="{
          selectedCoordinate: isSelectedCoordinate(
            rowIndex as ValidRowOrColumnNumber,
            colIndex as ValidRowOrColumnNumber
          )
        }"
        @click="
          selectCoordinate(rowIndex as ValidRowOrColumnNumber, colIndex as ValidRowOrColumnNumber)
        "
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue'
import { type ChessCoordinate, type ValidRowOrColumnNumber } from '@/constants/chessConstants'

const emit = defineEmits<{
  (event: 'coordinateSelected', coordinate: ChessCoordinate): void
}>()

const selectedCoordinates = ref<ChessCoordinate[]>([])

const selectCoordinate = (row: ValidRowOrColumnNumber, col: ValidRowOrColumnNumber) => {
  const index = selectedCoordinates.value.findIndex(
    (coordinate) => coordinate.row === row && coordinate.col === col
  )
  if (index === -1) {
    selectedCoordinates.value.push({ row, col })
  } else {
    selectedCoordinates.value.splice(index, 1)
  }
  emit('coordinateSelected', { row, col })
}

const isSelectedCoordinate = (
  row: ValidRowOrColumnNumber,
  col: ValidRowOrColumnNumber
): boolean => {
  return selectedCoordinates.value.some(
    (coordinate) => coordinate.row === row && coordinate.col === col
  )
}
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
.coordinate {
  width: 100%;
  padding-top: 100%;
  position: relative;
  background-color: #eee;
}

.row:nth-child(odd) .coordinate:nth-child(even)::before,
.row:nth-child(even) .coordinate:nth-child(odd)::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
}
.selectedCoordinate {
  box-shadow: rgba(255, 255, 0, 0.6) 0px 0px 0px 2px, rgba(255, 255, 0, 0.6) 0px 4px 6px -1px, rgba(255, 255, 0, 0.6) 0px 1px 0px inset;
}
</style>
