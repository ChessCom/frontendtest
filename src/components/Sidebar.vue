<template>
  <div class="sidebar"></div>
</template>

<script setup lang="ts">
import { useSquares } from '@/hooks/useSquares.ts'
</script>

<style scoped>
.sidebar {
  /* outline: 2px solid red; */
  flex-basis: var(--sidebarWidth);
  margin-left: var(--sidebarSpacing);
  background-color: #202020;
  border-radius: 12px;
}
</style>
