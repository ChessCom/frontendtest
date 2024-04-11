<template>
  <div class="sidebar">
    <h2>Selected Coordinates</h2>
    <ul>
      <li v-for="coordinate in coordinates" :key="`coordinate-${coordinate}`">
        Row: {{ coordinate.row }}, Col: {{ coordinate.col }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { type ChessCoordinate } from '../constants/chessConstants';

export default defineComponent({
  name: 'MainSidebar',
  props: {
    coordinates: {
      type: Array as PropType<ChessCoordinate[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
.sidebar {
  padding: 0px 20px;
  border-right: 1px solid #ccc;
  overflow-y: auto;
}
</style>

