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
  height: 100dvh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 55% 45%;
}

/* Small devices (portrait tablets and large phones, 600px and below) */
@media only screen and (max-width: 600px) {
  #main {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
  }
}

/* Small devices (landscape phones, 601px and up) */
@media only screen and (min-width: 601px) {
  #main {
    grid-template-columns: 70% 30%;
    grid-template-rows: 100dvh;
  }
}

/* Medium devices (landscape tablets, 992px and up) */
@media only screen and (min-width: 992px) {
  #main {
    grid-template-columns: 60% 40%;
    grid-template-rows: 100dvh;
  }
}
</style>
