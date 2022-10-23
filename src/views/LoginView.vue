<script>

export default {

  data() {
    return {
      username: "",
      password: "",
    }
  },


  methods: {
    login() {
      console.log("LOGGING IN");
    }
  }
}

</script>

<template>
  <form @submit.prevent="login">
    <div id="username-container">
      <label for="username">username</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div id="password-container">
      <label for="password">password</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button type="submit">submit</button>
  </form>
</template>
