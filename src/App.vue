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
  width: 100dvw;
  min-height: 100dvh;
  justify-content: center;
}

@media only screen and (max-width: 768px) {
  .layout {
    flex-direction: column;
    justify-content: start;
  }
}
</style>
