<template>
  <div class="chessboard">
    <div v-for="(rank, rankIndex) in squares" class="rank">
      <div
        v-for="(square, fileIndex) in rank"
        :class="['square', square.selected ? 'selected' : '']"
        @click.prevent="() => selectSquare(square)"
      >
        <span class="rank-text" v-if="rankIndex === 7">{{
          square.displayValue[0]
        }}</span>
        <span class="file-text" v-if="fileIndex === 0">{{
          square.displayValue[1]
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSquares } from '@/hooks/useSquares.ts'

const { squares, selectSquare } = useSquares()
</script>

<style scoped>
.chessboard {
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
}

.rank {
  height: 12.5%;
  display: flex;
}

.square {
  width: 12.5%;
  position: relative;
  background-color: #ffebcd;
}
.square:after {
  position: absolute;
  display: block;
  content: '';
  inset: 0;
  background-color: transparent;
  transition: background-color 150ms linear;
}

.square.selected:after {
  background-color: rgba(255, 145, 105, 0.361);
}
.square:hover:after {
  background-color: rgba(127, 255, 212, 0.361);
}

.chessboard > :nth-child(2n) > :nth-child(2n + 1) {
  background-color: #988c77;
}

.chessboard > :nth-child(2n + 1) > :nth-child(2n) {
  background-color: #988c77;
}

.rank-text {
  position: absolute;
  bottom: 0;
  right: 4px;
  color: #988c77;
}

.chessboard > div > :nth-child(2n + 1) > .rank-text {
  color: #ffebcd;
}

.file-text {
  position: absolute;
  top: 0;
  left: 4px;
  color: #988c77;
}

.chessboard > :nth-child(2n) > div > .file-text {
  color: #ffebcd;
}
</style>
