<template>
  <div :class="['table-item', { isClickDisable: isClickDisabled, isActive: isActive }]">
    <div class="row-number" v-if="clickIndex">{{ clickIndex }}.</div>
    <div class="row-square">{{ square }}</div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

const { clickIndex, square } = defineProps<{
  clickIndex?: number
  isActive?: boolean
  isClickDisabled?: boolean
  square: string
}>()
</script>
<style scoped>
.table-item {
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  box-sizing: border-box;
  color: var(--c-white-soft);
  font-size: 13px;
  font-weight: 600;
  height: 30px;
  line-height: 30px;
  padding: 0 5px 0 15px;
  width: 100%;
}
.table-item:nth-child(even) {
  background-color: var(--color-background-soft);
}
.table-item:hover {
  color: var(--c-white);
  background-color: var(--color-background-mute);
}

.isClickDisable {
  pointer-events: none;
}

.isActive {
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-color: black;
  border-radius: 2px;
  color: white;
  cursor: default;
  background-color: black;
}
.isActive:hover {
  background-color: black;
}
</style>
