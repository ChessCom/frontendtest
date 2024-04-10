<template>
  <div class="sidebar">
    <h2>Selected Squares</h2>
    <ul>
      <li v-for="(square, index) in squares" :key="`square-${index}`">
        Row: {{ square.row }}, Col: {{ square.col }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

interface Square {
  row: number;
  col: number;
}

export default defineComponent({
  name: 'MainSidebar',
  props: {
    squares: {
      type: Array as PropType<Square[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
/* Basic sidebar styles */
.sidebar {
  padding: 20px;
  border-right: 1px solid #ccc;
}
</style>
