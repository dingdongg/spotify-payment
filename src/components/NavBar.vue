<template>
   <div class="navbar">
     <div class="main-logo">
       <router-link to="/home">
         <img src="../components/icons/spotify-logo.png">
       </router-link>
     </div>
     <div class="bell-logo">
       <img src="./icons/bell-icon.png">
     </div>
     <div class="profile">
       <img src="./icons/penguin-boba.jpg" @click="toggleDropdown">
       <div class="dropdown" v-show="isDropdownOpen">
         <ul>
           <li>My Profile</li>
           <li @click="logout">Logout</li>
         </ul>
       </div>
     </div>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       isDropdownOpen: false
     }
   },
   methods: {
     toggleDropdown() {
       this.isDropdownOpen = !this.isDropdownOpen;
     },logout(){
      this.$router.push("/")
     }
   }
 }
 </script>
 
 <style scoped>
 .navbar {
   display: grid;
   padding-left: 30px;
   padding-top: 20px;
   padding-bottom: 5px;
   background-color: #181818;
   color: white;
   grid-template-columns: 1fr 5fr 0.35fr 0.5fr;
 }
 
 .main-logo img {
   max-width: 40px;
   max-width: 40px;
 }
 
 .main-logo {
   grid-column: 1/3;
 }
 
 .bell-logo {
   grid-column: 3/4;
 }
 
 .bell-logo>img {
   max-width: 80px;
   max-height: 55px;
 }
 
 .profile {
   grid-column: 4/5;
 }
 
 .profile>img {
   border-radius: 200px;
   max-width: 80px;
   max-height: 45px;
 }
 
 .dropdown {
   position: absolute;
   top: 60px;
   right: 5px;
   background-color: #fff;
   border-radius: 5px;
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
   z-index: 999;
 }
 
 .dropdown ul {
   list-style: none;
   padding: 0;
   margin: 0;
 }
 
 .dropdown ul li {
   padding: 10px;
   cursor: pointer;
 }
 
 .dropdown ul li:hover {
   background-color: #f2f2f2;
 }
 </style>
 