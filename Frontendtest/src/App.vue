<script setup>
import Chessboard from './components/Chessboard.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>

<header class = "header">
<img class="chess-img" src="/src/assets/chess.com.png">
<h1 class="frontend">FrontendTestChess.com</h1>
</header>
   <section class = "board-container">
  <main class = "chessboard">
    
    <div class="wrapper">
      <Chessboard msg = "" />
    </div>
  </main>

  
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@600&family=Orbitron&display=swap');

main {

background-color:;
border-radius: 10px;


}


section{

}
.wrapper{

display: flex;
margin-top: -98px;
justify-content:center;
margin-left: -80px;

width: 500px;


}

.chessboard{


margin-top: 100px;
padding: 100px;
height: 800px;
width: 900px;
display: flex;


}
.board-container{

display: flex;

justify-content: center;
}

.sidebar
{
background: white;
color:black;
height: 200px;
margin-top: -80px;
padding: 0px;
width: 400px;
margin-left: 10%

}
.header{
text-align:center;
color:gray;
font-style:'Lexend Deca', sans-serif;
display:flex;

}
.chess-img{
margin-left: 40px;
}
.frontend{
margin-left: -1px;
}
 @media only screen and (min-width: 1024px) {
 
 .chess-img{
 margin-left: 400px;

 }
 .board-container{
  width: 1500px;
  height: 1200px;

 }
 .wrapper{
  width: 1300px;
  margin-top:10px;
  height: 1040px;
  margin-bottom: -4px;
 }
 .chessboard{
  width: 1400px;
  height: 1190px;
  margin-top: 5px;

 }
}



</style>
