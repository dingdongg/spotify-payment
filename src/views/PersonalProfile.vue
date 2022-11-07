<script>
import { isMemberExpression } from '@vue/compiler-core';



// i can take the router.id then i can use that for index number in mockdata
export default{
    props: ["members"],
    
    data(){
       
        return{
            name: this.members[this.$route.params.id-1].name,
            img: this.members[this.$route.params.id-1].profilePicUrl,
            owed: this.members[this.$route.params.id-1].owed,
            lastPay: this.members[this.$route.params.id-1].lastpay
            
        }
    },
    methods:{
        log(){
            console.log(this.members[this.$route.params.id-1].owed)
        }
    }

}

</script>


<template>


<div class="container">
    <div class="userprofile">
        <img :src="img">
        <h4>PROFILE</h4>
        <h1>{{name}} </h1>
    </div>
    <div class="stats">
        <h1>last payment: ${{lastPay}}</h1>
        <h1>amount owed: ${{owed}}</h1>
    </div>
    <div class="count-down">
        
        <h1>next payment due in xx days</h1>
    </div>
    
    
</div>

</template>

<style scoped>

.container{
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    height: 100vh;
    background-color: #1F2833;
    color: white;
    font-family: roboto, 'Noto Sans Myanmar UI', arial, sans-serif;
}

.userprofile{
    grid-column: 1/-1;
    padding-left: 220px;
    padding-top: 30px;
}
.userprofile>img{
    border-radius: 200px;
    width: 200px;
    height: 200px;
    
}
.userprofile>h1{
    position: absolute;
    left: 460px;
    top:210px;
    font-size: 65px;
}
.userprofile>h4{
    position: absolute;
    left: 460px;
    top:190px;
    
}




.username{
    padding-top: 50px;
    padding-left: 50px;
}

.stats{
    grid-column: 2/3;
    
}
.stats>h1{
    padding: 10px;
    font-size: 20px;
}
.count-down{
    grid-column: 2/3;
    grid-row: 4/5;
}
</style>