<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})


</script>



<template>
 
  <div class = "event">
 <h1>Event tracker</h1>

 <div class = "event-tracker">

 </div>

  </div>
  
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@600&family=Orbitron&family=Raleway:ital,wght@0,300;0,400;1,200&display=swap');

div{
color: black;
padding: 0px; 



}
h1{
font-size: 30px;
text-align:center;
font-style: 'Raleway', sans-serif;


}
.event-tracker{

width: 350px;
margin-left: 8%;
margin-top: 50px;

}



</style>