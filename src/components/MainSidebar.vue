<template>
  <div class="sidebar">
    <h2 class="sidebar-title">Selected Coordinates</h2>
    <ul>
      <li v-for="(coordinate, index) in coordinates" :key="`coordinate-${coordinate}`">
        <p>{{ index + 1 }}. {{ getChessCoordinate(coordinate) }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import { type ChessCoordinate, getChessCoordinate } from '../constants/chessConstants'

defineProps({
  coordinates: {
    type: Array as PropType<ChessCoordinate[]>,
    required: true
  }
})
</script>

<style scoped>
.sidebar-title {
  position: sticky;
  top: 0;
  background: #222222;
  z-index: 10;
  padding: 15px 10px;
  width: 100%;
}

ul {
  list-style-type: none;
  margin-top: 0;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #e1e1e1;
  padding: 10px;
  border-radius: 5px;
}

p {
  margin: 0;
  font-weight: bold;
  flex: 1;
}
</style>
