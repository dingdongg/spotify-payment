<script>
import api from "../api/api";
import NavBar from "../components/NavBar.vue";
export default {

  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
    };
  },

  methods: {
    submitForm() {
      api.login({ 
        username: this.username, 
        password: this.password 
      });
    },

    togglePassword() {
      this.showPassword = !this.showPassword;
    }
  },
}

</script>

<template>
  <NavBar />
  <div class="container">
    <div class="background-wrapper">
      <img src="../components/icons/spotify-logo.png"/>
      <p class="login-form-text">Use your Spotify Tracker Account</p>
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <div id="username-container" class="input-container">
            <input class="clickable" id="username" type="text" v-model="username" placeholder="username" />
          </div>
          <div id="password-container" class="input-container" style="display: flex;">
            <input v-if="showPassword" class="clickable" type="text" id="password" v-model="password" placeholder="password" />
            <input v-else class="clickable" type="password" id="password" v-model="password" placeholder="password" />
            <button @click="togglePassword" class="clickable toggle-visibility" type="button">{{ showPassword ? "🐱" : "👁" }}</button>
          </div>
          <button type="submit" class="clickable form-submit-button">Log In</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
img{
  width: 60px;
  height: 60px;
  padding-bottom: 30px;
}
.container, .background-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.container {
  height: 100vh;
  background-color: #0b0C10;
  color: #66FCF1;
  font-family: roboto, 'Noto Sans Myanmar UI', arial, sans-serif;
}

.background-wrapper {
  background-color: #1F2833;
  border-radius: 5px;
  
  height: 60vh;
  width: 90vh;
}

.login-form-text {
  font-size: 32px;
  font-weight: bold;
}

.form-container {
  padding: 20px;
  width: 50%;
  padding-left: 80px;
}

.input-container {
  width: 100%;
}

.clickable {
  width:  300px;
  height: 50px;
  box-sizing: border-box;
  font-family: inherit;
  background-color: #1f2833;
  border: solid 2px #45a29e;
  border-radius: 5px;
  color: #c5c6c7;
  outline: none;
  transition: 0.3s;
  
  padding: 10px;
  
}
#username{
  width: 325px;
}

input:focus, input:hover, button:hover {
  border: 2px solid #66fcf1;
}

button:hover {
  background-color: #2f3338;
}

::placeholder { 
  color: #b1b1b1;
  opacity: 1; /* for firefox */
}

.input-container {
  margin: 10px 0 10px 0;
}

.form-submit-button{
  position: relative;
  top:20px;
  left: 28vh;
  width: 100px;
  height: 40px;
}

#password {
  width: 500%;
}

.toggle-visibility {
  border: 2px solid #1f2833;
  position: relative;
  width: 40px;
  height: 40px;
  right: 40px;
  top:5px;

  
}
button{
  background-color: transparent;
  outline: none;
}

</style>