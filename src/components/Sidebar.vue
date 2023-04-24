<template>
  <div class="sidebar">
    <h4>Your moves:</h4>
    <span class="move-info" v-for="(square, index) in moves">
      <span class="move-index">{{ index }}. </span>
      <span class="move-text">{{ square.displayValue }} </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useSquares } from '@/hooks/useSquares.ts'

const { moves } = useSquares()
</script>

<style scoped>
.sidebar {
  flex-basis: var(--sidebarWidth);
  margin-left: var(--sidebarSpacing);
  background-color: #202020;
  border-radius: 12px;
  padding: 24px;
  box-sizing: border-box;
}

h4 {
  margin: 0;
}

.move-info {
}

.move-index {
  color: lightgray;
  font-size: small;
}

.move-text {
  font-weight: bold;
  padding-right: 0.5rem;
}

@media only screen and (max-width: 768px) {
  .sidebar {
    margin-left: 0;
    margin-top: var(--sidebarSpacing);
    flex-basis: auto;
  }
}
</style>
