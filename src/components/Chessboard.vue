<template>
  <div class="chessboard">
    <div v-for="(_, rank) in Array.from(Array(8))" class="rank">
      <div
        v-for="(_, file) in Array.from(Array(8))"
        class="square"
        @click.prevent="selectSquare(rank, file)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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

.chessboard :nth-child(2n) :nth-child(2n + 1) {
  background-color: #988c77;
}

.chessboard :nth-child(2n + 1) :nth-child(2n) {
  background-color: #988c77;
}
</style>
