<template>

  <NavBar />
  <div class="container">
    <div class="background-wrapper">
      <img src="../../components/icons/spotify-logo.png"/>
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

<script>
import api from "../../api/api";
import NavBar from "../../components/NavBar.vue";

export default {
  inject:['isLoggedIn'],
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
      
      console.log("YOU ARE NOW LOGGED IN!")
      //will get from endpoint prop
     
      
      this.$router.push("/home")

    },

    togglePassword() {
      this.showPassword = !this.showPassword;
    }
  },
}

</script>
<style scoped>

img{
  width: 60px;
  height: 60px;
  padding-bottom: 30px;
}

form{
  padding: 40px;
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
.clickable {
  
 
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
  width: 40vh;
}
#password{
  width: 40vh;
}


 button:hover {
  cursor: pointer;
}


::placeholder { 
  color: #b1b1b1;
  opacity: 1; /* for firefox */
}

.input-container {
  margin: 20px 0 20px 50px;
}

.form-submit-button{
  position: relative;
  top:20px;
  left: 35vh;
  width: 100px;
  height: 40px;
}



.toggle-visibility {
  border: 2px solid #1f2833;
  position: relative;
  width: 30px;
  height: 30px;
  right: 39px;
  top:2px;

  
}
button{
  background-color: transparent;
  outline: none;
}

</style>