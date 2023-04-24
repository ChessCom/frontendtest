<template>
  <div class="main">
    <Chessboard />
  </div>
</template>

<script setup lang="ts">
import Chessboard from '@/components/Chessboard.vue'
</script>

<style scoped>
.main {
  width: var(--boardSize);
  height: var(--boardSize);
  background-color: #202020;
  border-radius: 12px;
  padding: 24px;
  box-sizing: border-box;
}
</style>
