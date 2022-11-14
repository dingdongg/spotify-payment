<script>

import NavBar from "./components/NavBar.vue"

export default {
  components: {
    NavBar,
  }
}

</script>

<template>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/member-home">Member Home</RouterLink>
    <RouterLink to="/admin-home">Admin Home</RouterLink>
    <RouterLink to="/admin-payment-history">Admin Payment History</RouterLink>
  </nav>
  <NavBar/>
  <RouterView />

</template>
