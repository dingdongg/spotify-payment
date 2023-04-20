<template>
  <RouterView/>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import { computed } from 'vue' 

export default {
  components: {
    NavBar, 
    
  },
  data(){
    return {
      isLoggedIn: false
    }
  },
  provide(){
    return{
      isLoggedIn: computed(() => this.isLoggedIn)
    }
  },
  // created(){
  //   //fetch here
  //   this.$root.$on('update-isLoggedIn', (value) => {
  //   this.isLoggedIn = value
  // })
  // }
    
  
}
</script>
