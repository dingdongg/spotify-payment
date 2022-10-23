<script>
import api from "../api/api";

export default {

  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    submitForm() {
      api.login({ 
        username: this.username, 
        password: this.password 
      });
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
          <div id="password-container" class="input-container">
            <input class="clickable" type="password" id="password" v-model="password" placeholder="password" />
          </div>
          <button type="submit" class="clickable form-submit-button">submit</button>
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
  width: 50vh;
}

.login-form-text {
  font-size: 32px;
  font-weight: bold;
}

.form-container {
  padding: 10px;
  width: 50%;
}

.form-submit-button {
  width: 100%;
}

input, button {
  font-family: inherit;
}

input {
  width: 96%;
}

.input-container {
  margin: 10px 0 10px 0;
}

.clickable {
  font-size: 20px;
}

</style>