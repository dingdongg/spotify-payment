<!-- PayNow.vue -->
<template>
    <div>
      <NavBar />
      <div class="container">
        <button>Pay now</button>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from '../../components/NavBar.vue';
  
  export default {
    components: {
      NavBar
    }
  }
  </script>
  
  <style scoped>
  .container{
      background-color:#1F2833 ;
      height: 100vh;
  }
  button{
      margin-left: 80vh;
      margin-top: 45vh;
      padding: 20px;
      background-color: #66FCF1;
      border:none;
      border-radius: 60px;
  }
  </style>
  
  