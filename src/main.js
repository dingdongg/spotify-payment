import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from "./api/api.mjs"
import './assets/main.css'
import './assets/reset.css';

const app = createApp(App)
app.use(api)
app.use(router)
app.mount('#app')
