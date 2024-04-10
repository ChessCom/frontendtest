<template>
  <div class="sidebar">
    <MainSidebar :squares="selectedSquares" />
  </div>
  <div class="chessboard-container">
    <MainChessboard @squareSelected="handleSquareSelection" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainChessboard from './components/MainChessboard.vue'
import MainSidebar from './components/MainSidebar.vue'

export type Square = {
  row: number
  col: number
}

const selectedSquares = ref<Square[]>([])

function handleSquareSelection(square: Square) {
  selectedSquares.value.push(square)
}
</script>

<style>
:root {
  --vt-c-white: #ffffff;
  --vt-c-white-soft: #f8f8f8;
  --vt-c-white-mute: #f2f2f2;

  --vt-c-black: #181818;
  --vt-c-black-soft: #222222;
  --vt-c-black-mute: #282828;

  --vt-c-indigo: #2c3e50;

  --vt-c-divider-light-1: rgba(60, 60, 60, 0.29);
  --vt-c-divider-light-2: rgba(60, 60, 60, 0.12);
  --vt-c-divider-dark-1: rgba(84, 84, 84, 0.65);
  --vt-c-divider-dark-2: rgba(84, 84, 84, 0.48);

  --vt-c-text-light-1: var(--vt-c-indigo);
  --vt-c-text-light-2: rgba(60, 60, 60, 0.66);
  --vt-c-text-dark-1: var(--vt-c-white);
  --vt-c-text-dark-2: rgba(235, 235, 235, 0.64);
}

/* semantic color variables for this project */
:root {
  --color-background: var(--vt-c-white);
  --color-background-soft: var(--vt-c-white-soft);
  --color-background-mute: var(--vt-c-white-mute);

  --color-border: var(--vt-c-divider-light-2);
  --color-border-hover: var(--vt-c-divider-light-1);

  --color-heading: var(--vt-c-text-light-1);
  --color-text: var(--vt-c-text-light-1);

  --section-gap: 160px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: var(--vt-c-black);
    --color-background-soft: var(--vt-c-black-soft);
    --color-background-mute: var(--vt-c-black-mute);

    --color-border: var(--vt-c-divider-dark-2);
    --color-border-hover: var(--vt-c-divider-dark-1);

    --color-heading: var(--vt-c-text-dark-1);
    --color-text: var(--vt-c-text-dark-2);
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-weight: normal;
}

body {
  min-height: 100vh;
  color: var(--color-text);
  background: var(--color-background);
  transition:
    color 0.5s,
    background-color 0.5s;
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
  display: grid;
  grid-template-columns: minmax(125px, 250px) auto;
  height: 100vh;
  width: 100vw;
  background-color: #222222;
}

.sidebar {
  grid-column: 1;
  height: 100%;
  width: 100%;
  padding-left: 10px;
  padding-top: 10px;
  overflow-y: auto;
}

.chessboard-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  padding: 5vh 5vw;
  box-sizing: border-box;
}

.chessboard {
  min-width: 40vw;
  max-width: 80vw; 
  max-height: 80vh; 
  aspect-ratio: 1;
}

@media (max-width: 768px) {
  #app {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr minmax(30%, auto);
    height: 100vh;
    width: 100vw;
  }

  .sidebar {
    grid-row: 2;
    padding: 10px;
  }

  .chessboard-container {
    grid-column: 1;
    grid-row: 1;
    padding: 10px;
  }
}
</style>
