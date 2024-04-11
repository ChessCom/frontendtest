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
}

#app {
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #222222;
}

.sidebar-container {
  flex: 1; 
  height: 100%;
  padding-left: 10px;
  padding-top: 10px;
  overflow-y: auto;
  min-width: 125px; 
  padding: 20px;
  border-left: 1px solid #ccc;
  position: relative;
}

.chessboard-container {
  flex: 3; 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
}

.chessboard {
  height: 100%;
  aspect-ratio: 1 / 1;
  margin: auto;
}

@media (max-width: 900px) {
  #app {
    flex-direction: column; 
  }

  .sidebar,
  .chessboard-container {
    width: 100%;
    max-width: none;
    padding: 10px;
  }

  .chessboard {
    max-width: 100%;
    max-height: calc(70vh - 20px);
    aspect-ratio: 1;
  }

  .sidebar-container {
    border-left: none;
    border-top: 1px solid #ccc;
    padding-top: 0;
    padding-left: 0;
    max-height: 30vh;
  }
}
</style>
