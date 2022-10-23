<script>

</script>


<template>
<div class="navbar">



<div class="main-logo">
<img src="./icons/spotify-logo.png" >
</div>
 

 <div class="bell-logo">
  <img src="./icons/bell-icon.png" >
 </div>
  <div class="profile">
    
  <img src="./icons/penguin-boba.jpg" >
 </div>

   
</div>

</template>

<style scoped>


.navbar{
    display:grid;
    padding-left:30px;
    padding-top:20px;
    padding-bottom:5px;
    
    background-color: #181818;
    color:white;
    grid-template-columns: 1fr 5fr 0.35fr 0.5fr;
}
 
 .main-logo > img{
    max-width:40px;
    max-width:40px;
 }
 

 .main-logo{
    grid-column: 1/3;
    
 }
 .bell-logo{
    grid-column:3/4;
    
 }
 
 .bell-logo>img{
    max-width:80px;
    max-height:55px;
 }
.profile{
    grid-column:4/5;
}
.profile>img{
    border-radius:200px;
    max-width:80px;
    max-height:45px;
 }


</style>