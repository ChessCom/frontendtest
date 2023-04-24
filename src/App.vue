<template>
  <div class="layout">
    <Main />
    <Sidebar />
  </div>
</template>

<script setup lang="ts">
import Main from './components/Main.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<style scoped>
.layout {
  display: flex;
  width: 90dvw;
  height: 90dvh;
  min-height: 200px;
  /* outline: 2px solid pink; */
  justify-content: center;
}
</style>
