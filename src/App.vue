<script setup lang="ts">
import SideMenu from './components/SideMenu.vue'
import ChessCanvas from './components/ChessboardCanvas.vue'
</script>

<template>
  <main id="main">
    <ChessCanvas />
    <SideMenu />
  </main>
</template>

<style scoped>
#main {
  height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 55% 45%;
}

@media only screen and (min-width: 768px) {
  #main {
    height: 100vh;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr;
  }
}
</style>
