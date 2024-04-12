<template>
  <div class="chessboard-container">
    <MainChessboard @coordinateSelected="handleCoordinateSelection" />
  </div>
  <div class="sidebar-container">
    <MainSidebar :coordinates="selectedCoordinates" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainChessboard from './components/MainChessboard.vue'
import MainSidebar from './components/MainSidebar.vue'
import { type ChessCoordinate } from './constants/chessConstants'

const selectedCoordinates = ref<ChessCoordinate[]>([])

function handleCoordinateSelection(coordinate: ChessCoordinate) {
  selectedCoordinates.value.push(coordinate)
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-weight: normal;
}

html {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

body {
  color: #ffffff;
  background: #222222;
  line-height: 1.6;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}

#app {
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.sidebar-container {
  flex: 1;
  height: 100%;
  padding: 0px 20px;
  border-left: 1px solid #ccc;
  overflow-y: auto;
  width: 100%;
}

.chessboard-container {
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
  max-height: 100%;
}

.chessboard {
  height: 90%;
  min-width: 300px;
  aspect-ratio: 1;
}

@media (max-width: 900px) {
  #app {
    flex-direction: column;
  }

  .sidebar-container {
    flex: 1 0 40vh;
    border-left: none;
    border-top: 1px solid #ccc;
    padding-top: 0;
    padding-left: 0;
    height: auto;
    min-height: 30vh;
    max-height: 50vh;
  }

  .chessboard-container {
    flex: 3 0 60vh;
    height: auto;
    max-height: 70vh;
  }

  .chessboard {
    height: auto;
    margin: auto;
  }
}
</style>
