<template>
  <ul id="chessboard">
      <li v-bind:key="index" tabindex="0" v-bind:class="handleSquareClasses(square, index)" 
      v-for="(square, index) of squares" v-on:click="handleSquareClick(index)" 
      v-on:keyup.enter="handleSquareClick(index)">
        <div v-if="selectedSquare === index" class="clicked"/>
      </li>
  </ul>
</template>



<script>
import { range } from "lodash";

export default {
name: "ChessBoard",

data: function() {
  return {
    squares: [],
    selectedSquares: [],
    selectedSquare: -1,
    numClicks: 0
  };
},

methods: {
  /**
   * Records the selectedSquare and adds it to the array of selectedSquares.  Also emits this.selectedSquares to App
   * @param {number} index - index of square
   * @returns {void}
   */
  handleSquareClick: function(index) {
    this.numClicks++;
    this.selectedSquare = index;
    this.selectedSquares.push(
      `${this.numClicks}. ${this.squareToCoordinate(index + 1)}`
    );
    this.$emit("handleSquareClick", this.selectedSquares);
  },
  /**
   * Sets square to a coordinate, i.e. 1 is set to a8
   * @param {number} num - the number of the square, ranges from 1-65(not including 65)
   * @returns {string} - the coordinate to be output in the Sidebar
   */
  squareToCoordinate: function(num) {
    const coordinates = [
      { range: range(1, 9), row: 8, col: num },
      { range: range(9, 17), row: 7, col: num - 8 },
      { range: range(17, 25), row: 6, col: num - 16 },
      { range: range(25, 33), row: 5, col: num - 24 },
      { range: range(33, 41), row: 4, col: num - 32 },
      { range: range(41, 49), row: 3, col: num - 40 },
      { range: range(49, 57), row: 2, col: num - 48 },
      { range: range(57, 65), row: 1, col: num - 56 }
    ];

    const findCoord = coordinates.find(({ range }) =>
      range.includes(num)
    );

    const convertColumnsToLetters = col => {
      const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      return letters[col - 1] || null; // Subtract 1 because array indices start at 0
    };

    return `${convertColumnsToLetters(findCoord.col)}${
      findCoord.row
    }`;
  },
  /**
   * Handles css classes, notably the corner squares' border-radii
   * @param {string} square - the initial value of each square. If odd, square is "odd" and if even, square is "even"
   * @param {number} index - index of this.squares
   * @returns {string} - the css classes
   */
   handleSquareClasses: function(square, index) {
    const position = {
      0: "top-left",
      7: "top-right",
      56: "bottom-left",
      63: "bottom-right"
    }[index] || '';

    return `${square} square ${position} ${index}`;
  }
},
/**
 * Creates an array of 64 items that populate the <li/>
 * @returns {void}
 */
created() {
  this.squares = Array.from({ length: 64 }, (_, i) => {
    // Calculate row and column based on index
    const row = Math.floor(i / 8);
    const col = i % 8;
    // Alternate based on the sum of row and column
    return (row + col) % 2 === 0 ? 'light' : 'dark';
  });
}
};
</script>

<style scoped>
li {
  flex-basis: 12.5%;
}

.light {
  background: #fffdd0; /* Lighter color for 'light' squares */
}

.dark {
  background: #49863a; /* Darker color for 'dark' squares */
}

.square {
position: relative;
list-style-type: none;
}

.square:focus {
z-index: 5;
outline: 2px solid rgba(255, 239, 153, 1);
outline-offset: -2px;
}

.clicked {
position: absolute;
background-color: rgba(241, 251, 95, 0.6);
width: 100%;
height: 100%;
}

.top-left {
border-top-left-radius: 3px;
}

.top-right {
border-top-right-radius: 3px;
}

.bottom-left {
border-bottom-left-radius: 3px;
}

.bottom-right {
border-bottom-right-radius: 3px;
}

#chessboard {
display: flex;
justify-content: stretch;
align-items: stretch;
max-height: 85vh;
max-width: 85vh;
width: calc(85vw - 35vw);
height: calc(85vw - 35vw);
flex-wrap: wrap;
align-self: center;
margin-right: 60px;
padding: 0go;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

@media only screen and (min-device-width: 320px) and (max-device-width: 600px) {
#chessboard {
  width: 95vw;
  height: 95vw;
  margin: 10px 0 0 0;
}
}
</style>