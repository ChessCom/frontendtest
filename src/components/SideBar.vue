<template>
    <div class="sidebar">
      <h2>Selected Squares:</h2>
      <ul>
        <li v-for="(square, index) in highlightedSquares" :key="index">
          {{ index + 1 }}. {{ square }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
    props: {
      highlightedSquares: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  
  <style scoped>
  @media only screen and (min-width: 833px) {
    .sidebar {
      width: 20vw;
      max-width: 200px;
    }
  }
  .sidebar {
    width: 600px;
    overflow-y: scroll;
    padding: 2rem;
    background-color: #f0f0f0;
    box-sizing: border-box;
    height: 80vw;
    max-height: 600px;
  }
  
  h2 {
    margin-top: 0;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  li {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
  </style>