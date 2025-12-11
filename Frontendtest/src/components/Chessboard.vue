import Sidebar from './components/Sidebar.vue'

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})


</script>





<template>
<section class="container">
<section class = "chess-component">
<section class = "chess-squares1">
<div style = "background-color:#eeeed2;"  v-on:click="squareClick1(1);" id = 1  class= "square-1"><img class= "white-rook1" src="/src/assets/WhiteRook1.png"></div>
<div style = "background-color:#769656;"  v-on:click="squareClick1(2)" id = 2 class= "square-2"><img class= "white-knight1" src="/src/assets/whiteknight1.png"></div>
<div style = "background-color:#eeeed2;"  v-on:click="squareClick1(3)" id = 3 class= "square-3"><img class= "white-bishop1" src="/src/assets/white-Bishop1.png"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(4)" id = 4 class= "square-4"><img class= "white-queen" src="/src/assets/whiteQueen.png"></div>

<div style = "background-color:#eeeed2;" v-on:click="squareClick1(5)" id = 5  class= "square-5"><img class= "white-king" src="/src/assets/whiteKing.png"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(6)" id = 6  class= "square-6"><img class= "white-bishop2" src="/src/assets/white-Bishop2.png"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(7)" id = 7 class= "square-7"><img class= "white-knight1" src="/src/assets/whiteknight1.png"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(8)" id = 8 class= "square-8"><img class= "white-rook1" src="/src/assets/whiteRook1.png"></div>

</section>

<section class = "chess-squares2">
<div style = "background-color:#769656;" v-on:click="squareClick1(9)" id = 9  class= "square-1"><img class= "white-pawn" src="/src/assets/whitePawn.png"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(10)" id = 10 class= "square-2"><img class= "white-pawn" src="/src/assets/whitePawn.png"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(11)" id = 11 class= "square-3"><img class= "white-pawn" src="/src/assets/whitePawn.png"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(12)" id = 12 class= "square-4"><img class= "white-pawn" src="/src/assets/whitePawn.png"></div>

<div style = "background-color:#769656;" v-on:click="squareClick1(13)" id = 13 class= "square-5"><img class= "white-pawn0" src="/src/assets/whitePawn.png"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(14)" id = 14 class= "square-6"><img class= "white-pawn0" src="/src/assets/whitePawn.png"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(15)" id = 15 class= "square-7"><img class= "white-pawn0" src="/src/assets/whitePawn.png"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(16)" id = 16 class= "square-8"><img class= "white-pawn0" src="/src/assets/whitePawn.png"></div>

</section>

<section class = "chess-squares3">
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(17)"  id =17 class= "square-1"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(18)"  id = 18 class= "square-2"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(19)" id = 19 class= "square-3"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(20)"  id = 20 class= "square-4"></div>

<div  style = "background-color:#eeeed2;" v-on:click="squareClick1(21)"  id = 21 class= "square-5"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(22)"  id = 22 class= "square-6"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(23)" id = 23 class= "square-7"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(24)" id = 24 class= "square-8"></div>

</section>

<section class = "chess-squares4">
<div style = "background-color:#769656;" v-on:click="squareClick1(25)" id =25 class= "square-1"><img></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(26)" id = 26 class= "square-2"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(27)" id= 27 class= "square-3"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(28)" id = 28 class= "square-4"></div>

<div style = "background-color:#769656;" v-on:click="squareClick1(29)"  id = 29  class= "square-5"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(30)"  id = 30 class= "square-6"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(31)" id = 31 class= "square-7"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(32)"  id = 32 class= "square-8"></div>

</section>
<section class = "chess-squares5">
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(33)"  id =33 class= "square-1"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(34)"  id =34 class= "square-2"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(35)"  id =35 class= "square-3"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(36)"  id =36  class= "square-4"></div>

<div style = "background-color:#eeeed2;" v-on:click="squareClick1(37)"  id =37 class= "square-5"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(38)"  id = 38 class= "square-6"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(39)"  id = 39 class= "square-7"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(40)"  id = 40 class= "square-8"></div>

</section>


<section class = "chess-squares6">
<div style = "background-color:#769656;" v-on:click="squareClick1(41)" id = 41 class= "square-1"><img></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(42)" id = 42 class= "square-2"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(43)"  id = 43 class= "square-3"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(44)"  id = 44 class= "square-4"></div>

<div style = "background-color:#769656;" v-on:click="squareClick1(45)"  id = 45 class= "square-5"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(46)"  id = 46 class= "square-6"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(47)" id = 47 class= "square-7"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(48)" id = 48 class= "square-8"></div>

</section>

<section class = "chess-squares7">
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(49)" id =49  class= "square-1"><img class= "black-pawn" src="/src/assets/blackpawn.png"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(50)" id = 50 class= "square-2"><img class= "black-pawn" src="/src/assets/blackpawn.png"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(51)" id = 51 class= "square-3"><img class= "black-pawn" src="/src/assets/blackpawn.png"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(52)" id = 52 class= "square-4"><img class= "black-pawn" src="/src/assets/blackpawn.png"></div>

<div style = "background-color:#eeeed2;" v-on:click="squareClick1(53)"  id = 53 class= "square-5"><img class= "black-pawn0" src="/src/assets/blackpawn.png"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(54)"  id = 54 class= "square-6"><img class= "black-pawn0" src="/src/assets/blackpawn.png"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(55)" id = 55 class= "square-7"><img class= "black-pawn0" src="/src/assets/blackpawn.png"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(56)" id = 56 class= "square-8"><img class= "black-pawn0" src="/src/assets/blackpawn.png"></div>

</section>

<section class = "chess-squares8">
<div style = "background-color:#769656;" v-on:click="squareClick1(57)" id = 57 class= "square-1"><img class= "black-rook" src="/src/assets/blackRook.png"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(58)" id = 58 class= "square-2"><img class= "black-knight" src="/src/assets/blackKnight2.png"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(59)" id = 59 class= "square-3"><img class= "black-bishop" src="/src/assets/blackBishop.png"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(60)" id = 60 class= "square-4"><img class= "black-king" src="/src/assets/blackKing.png"></div>

<div style = "background-color:#769656;" v-on:click="squareClick1(61)"  id = 61 class= "square-5"><img class= "black-queen" src="/src/assets/blackQueen.png"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(62)" id = 62 class= "square-6"><img class= "black-bishop0" src="/src/assets/blackBishop.png"></div>
<div style = "background-color:#769656;" v-on:click="squareClick1(63)" id = 63 class= "square-7"><img class= "black-knight0" src="/src/assets/blackKnight2.png"></div>
<div style = "background-color:#eeeed2;" v-on:click="squareClick1(64)" id= 64 class= "square-8"><img class= "black-rook0" src="/src/assets/blackRook.png"></div>

</section>




</section>

<div class = "sidebar">
 <h1 class = "tracker" id = "tracker"></h1>
 <img v-on:click="themeChange()" class = "ui-light" src= "/src/assets/lightUI.png">
 <p1 id = "white-theme" class = "white-theme">white theme</p1>
</div>

</section>
</template>


<script>
const current_div_state = [];
let current_state_count = 0;
let count = 1;
export default {

  methods: {
    squareClick1(divNumber) {
      for(let i=0; i<=64; i++){
       
       if (divNumber==i){
       
       current_state_count+=1;
       var color = document.getElementById(i);
       current_div_state.push({ dom_state: color, color: color.style.backgroundColor });
       color.style.backgroundColor = "white";
       console.log(current_state_count);
       var text = document.getElementById("tracker");
       if(current_div_state[current_div_state.length-1].color != "white"){
       text.innerHTML = current_div_state[current_div_state.length-1].color;
       }
       

       if(current_div_state.length>1 && current_div_state[current_div_state.length-2].color != "white"){
        console.log(current_div_state);
       console.log(current_div_state[current_div_state.length-2]);
       current_div_state[current_div_state.length-2].dom_state.style.backgroundColor = current_div_state[current_div_state.length-2].color;
       current_state_count+=1;
       }
       
       
       

       }
       


      }

    },
    themeChange(){
    count+=1;
    var ui = document.querySelector("body")
    var changeText = document.getElementById("white-theme")
    if(count%2==0){
    ui.style.backgroundColor= "white";
    changeText.innerHTML = "black theme";
    
   }
   else{
   ui.style.backgroundColor = "black";
   changeText.innerHTML = "white theme";
   }

    }
    
    
}
}

</script>





<style scoped>

.board-component{


}
.square-1, .square-2,.square-3, .square-4 {
 padding: 30px;
 margin: 0px;
 height: 62.50px;
 width: 62.50px;
 text-align: center;
 
}
.square-5, .square-6,.square-7, .square-8 {
 padding: 30px;
 margin: 0px;
 height:62.50px;
 width: 62.50px;
}
.chess-component{
 display: inline;
 
 
}
.white-rook1,.white-knight1,.white-bishop1,.white-queen,
.white-king, .white-bishop1,.white-knight2,.white-bishop2
{
width: 40px;
text-align:center;
margin-left: -20px;
margin-top: -20px;
}
.white-pawn{
width: 40px;
text-align:center;
margin-left: -60px;
margin-right: -60px;
margin-top: -40px;

}
.white-pawn0{
width: 40px;
text-align:center;
margin-left: -20px;
margin-right: -80px;
margin-top: -40px;

}
.black-knight{
width: 40px;
text-align:center;
margin-left: -20px;
margin-top: -20px;
}
.black-knight0{
width: 40px;
text-align:center;
margin-left: -20px;
margin-top: -20px;

}
.black-rook{
width: 40px;
text-align:center;
margin-left: -60px;
margin-right: -60px;
margin-top: -40px;
}
.black-rook0{

width: 40px;
text-align:center;
margin-left: -20px;
margin-right: -60px;
margin-top: -40px;

}
.black-bishop{
width: 50px;
text-align:center;
margin-left: -60px;
margin-right: -60px;
margin-top: -40px;
}
.black-bishop0{
width: 50px;
text-align:center;
margin-left: -20px;
margin-right: -60px;
margin-top: -40px;

}
.black-king{
width: 40px;
text-align:center;
margin-left: -60px;
margin-right: -60px;
margin-top: -60px;
}
.black-queen{
width: 40px;
text-align:center;
margin-left: -20px;
margin-right: -50px;
margin-top: -60px;
}
.black-pawn{
width: 40px;
text-align:center;
margin-left: -60px;
margin-right: -60px;
margin-top: -40px;
}
.black-pawn0{
width: 40px;
text-align:center;
margin-left: -20px;
margin-right: -60px;
margin-top: -40px;

}

.chess-squares1,.chess-squares2,.chess-squares3,.chess-squares4,.chess-squares5,
.chess-squares6,.chess-squares7,.chess-squares8
{
display: flex;
}
.header{
background-color: red;
}
.chess-squares1, .chess-squares8 {
border-radius: 20px;
}

.sidebar{
background-color: gray;
margin-top: 320px;
width: 400px;
height: 120px;
margin-left: 10%;
text-align: center;
font-size: 15px;

}

.ui-light{

margin-left: -290px;
margin-top:70px;
width: 15px;
}

.white-theme{
font-size: 13px;


}


 @media only screen and (min-width: 1024px) {
  .container{
  display:flex;
 
}
.sidebar{
margin-right: -2px;
margin-left: 40px;
margin-top: 10px;
height: 400px;
width: 350px;
font-size: 20px;
border-radius:20px;

}
.chess-component{
  
  padding: 00px;
}

.square-1, .square-2,.square-3, .square-4 {
 padding: 60px;
 margin: 0px;
 height: 62.50px;
 width: 62.50px;
 text-align: center;
 
}
.square-5, .square-6,.square-7, .square-8 {
 padding: 60px;
 margin: 0px;
 height:62.50px;
 width: 62.50px;
}
.container{

margin-right: 100px;
margin-top:30px;
margin-left: 200px;
width: 1400px;

}
.ui-light{

margin-left: -250px;
margin-top:190px;
width: 15px;
}
.white-theme{
font-size: 13px;


}
.tracker{
margin-top: 150px;

}

}



</style>
