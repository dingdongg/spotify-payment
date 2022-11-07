<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "./components/NavBar.vue"
import LoginView from './views/LoginView.vue';
import AdminHomeView from './views/ProfileSelection.vue';
</script>



   

<template>
  
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/member-home">Member Home</RouterLink>
    <RouterLink to="/admin-home">Admin Home</RouterLink>
    
  </nav>
  <NavBar/>
 
  <RouterView />

  <!-- <AdminHomeView
    :name="mockName"
    :members="mockData"
  /> -->

</template>






<!-- <template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
  -->