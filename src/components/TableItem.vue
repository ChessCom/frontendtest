<template :id="`item-${clickIndex}`">
  <div :class="['table-item', { isClickDisable: isClickDisabled, isSelected: isSelected }]">
    <div class="row-number" v-if="clickIndex">{{ clickIndex }}.</div>
    <div class="row-square">{{ square }}</div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

const { clickIndex, square, isSelected } = defineProps<{
  clickIndex?: number
  isClickDisabled?: boolean
  square: string
  isSelected?: boolean
}>()
</script>
<style scoped>
.table-item {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 0 5px 0 15px;
  overflow: hidden;
  font-size: 13px;
  font-weight: 600;
  line-height: 30px;
  color: var(--c-white);
  cursor: pointer;
}

.row-number {
  width: 3rem;
}

.table-item:nth-child(odd) {
  background-color: var(--color-background-soft);
}

.table-item:hover {
  color: var(--c-white);
  background-color: var(--color-background-mute);
}

.isClickDisable {
  pointer-events: none;
}

.row-square {
  position: absolute;
  top: 3px;
  left: 40px;
  min-width: 40px;
  height: 24px;
  line-height: 24px;
  padding: 0 4px;
}

.isSelected > .row-square {
  background-color: #484745;
  border-color: #5a5b58;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-radius: 2px;
  cursor: default;
}
</style>
