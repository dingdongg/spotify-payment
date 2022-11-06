<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "./components/NavBar.vue"
import LoginView from './views/LoginView.vue';
import AdminHomeView from './views/AdminHomeView.vue';
import AdminPaymentHistoryView from './views/AdminPaymentHistoryView.vue';

const mockData = [];
const mockName = "test admin";

for (let i = 1; i < 5; i++) {
  mockData.push({
    name: `mock person #${i}`,
    id: i,
  });
}

mockData[0].profilePicUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png";
mockData[1].profilePicUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png";
mockData[2].profilePicUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png";
mockData[3].profilePicUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png";

const mockPayments = [];

const randomStatus = () => {
  const decider = Math.round(Math.random() * 2);

  switch (decider) {
    case 0:
      return "approved";
    case 1:
      return "pending";
    default:
      return "rejected";
  }
}

for (let i = 1; i < 25; i++) {
  mockPayments.push({
    amountPaid: Math.round(30 + Math.random() * 25),
    datePaid: new Date(),
    payingMemberId: mockData[i % 4],
    status: randomStatus(),
    paymentId: i,
  });
}

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