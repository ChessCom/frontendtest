<template>
  <div id="app">
    <PlayerInfo :player= "playerData" />
     <div class="flex-container">
        <ChessBoard v-on:handleSquareClick="storeSelectedSquares($event)"/>
        <SideBar v-bind:selected-squares="selectedSquares"/>
     </div>
  </div>
 </template>



<script>
import ChessBoard from './components/ChessBoard.vue'
import PlayerInfo from './components/PlayerInfo.vue';
import SideBar from './components/SideBar.vue'


export default {
  name: 'App',
  components: {
    ChessBoard,
    SideBar,
    PlayerInfo,
},
  data(){
    return {
      selectedSquares:[],
      playerData: {
        name: 'Mittens',
        rating: '500',
        title: 'USA',
        avatar: '/meow.jpg', 
      },
    };
  },
  methods: {
    storeSelectedSquares: function(selectedSquares) {
      this.selectedSquares = selectedSquares;
    }
  }
};
</script>

<style>

body {
  position: relative;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
#app {
  font-family: 'Times New Roman', Times, serif;
  text-align: align-self;
  font-weight: bold;
  color: #000000;
  margin-bottom: 0;
  background-color: #818589;
}

.flex-container {
 display: flex;
 position: absolute;
 justify-content: flex-start;
 align-items: center;
 height: 100%;
 width: 100%;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 600px) {
  .flex-container{
    flex-direction: column;
    justify-content: center;
  }
  
}
</style>
