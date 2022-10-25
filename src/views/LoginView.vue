<script>
import api from "../api/api";

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
  <div class="container">
    <div class="background-wrapper">
      <p class="login-form-text">SPOTIFY PAYMENT LOGIN</p>
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
          <button type="submit" class="clickable form-submit-button">log in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

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
  padding: 20px;
  height: 30vh;
  width: 55vh;
}

.login-form-text {
  font-size: 32px;
  font-weight: bold;
}

.form-container {
  padding: 10px;
  width: 50%;
}

.input-container {
  width: 100%;
}

.clickable {
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  background-color: #1f2833;
  border: solid 2px #45a29e;
  border-radius: 5px;
  color: #c5c6c7;
  outline: none;
  transition: 0.3s;
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

.clickable {
  font-size: 20px;
}

#password {
  width: 500%;
}

.toggle-visibility {
  border: 2px solid #1f2833;
}
</style>