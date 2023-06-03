<template>
  <div class="chessboard">
    <div v-for="(square, index) in squares" :key="index" :class="
      'square' + (highlightedSquares.includes(square) ? ' highlight' :
        (parseInt(index + index / 8) % 2) ? ' black' : ' white')" @click="highlightSquare(square)">
      {{ square }}
    </div>
    <div class="sidebar">
      <ol>
        <h3>Moves:</h3>
        <li v-for="(square, index) in highlightedSquares" :key="index">
          {{ square }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chessboard",
  data() {
    return {
      squares: [
        "a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8",
        "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7",
        "a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6",
        "a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5",
        "a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4",
        "a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3",
        "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2",
        "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"
      ],
      highlightedSquares: [],
    };
  },
  methods: {
    highlightSquare(square) {
      if (!this.highlightedSquares.includes(square)) {
        this.highlightedSquares.push(square);
      }
    },
  },
};
</script>

<style>
.chessboard {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: 600px;
  max-width: 100%;
  max-height: 100%;
}

.square {
  width: 75px;
  height: 75px;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: black;
}

.square.white {
  background-color: #ebecd0;
}

.square.black {
  background-color: #779556;
}

.square.highlight {
  background-color: yellow;
}

.sidebar {
  height: 100%;
  width: 10%;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  padding-top: 20px;
  font-size: 20px;
  border-color: black;
  border-width: 1 px;
  border-style: solid;
}

h3 {
  text-align: left;
}
</style>