<script>
import { defineAsyncComponent } from 'vue';
import { routerKey } from 'vue-router';

import router from "../router"
export default{
    methods:{
        checkProfile (){
            console.log("test")
            router.push("/my-profile")
        },
        checkHistory(){
            console.log("history")
            router.push("/my-history")
        },
        checkPayment(){
            console.log("asdfas")
            router.push("/my-payments")
        }


}

}

</script> 


<template>
    <div class="container">
        <div class="welcome-user">
            <img src="../../components/icons/penguin-boba.jpg">
             <h2>Hi, mahkel</h2>
        </div>

        <div class="profile"  @click="checkProfile()">
            <img src="../components/icons/3018530_buyer_customer_figure_person_portrait_icon.png"/>
            <h2>Profile</h2> 
        </div>
        <div class="history" @click=" checkHistory()">
            <img src="../components/icons/3018530_buyer_customer_figure_person_portrait_icon.png"/>
            <h2>History</h2> 
            
        </div>
        <div class="payment" @click="checkPayment()">
            <img src="../components/icons/3018530_buyer_customer_figure_person_portrait_icon.png"/>
            <h2>Payment</h2> 
           
        </div>

    </div>
</template>

<style scoped>
    .container{
        background-color: #353b45;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 0.5fr 1fr ;
        color: whitesmoke;
        font-family: roboto, 'Noto Sans Myanmar UI', arial, sans-serif;
    }

    .welcome-user{
        grid-column:1/-1;
        padding-left: 300px;
        padding-top: 80px;
    }
    .welcome-user>h2{
        position: absolute;
        left: 460px;
        top:210px;
        font-size: 65px;
    }
    .welcome-user>img{
        border-radius: 400px;
        width: 120px;
        height: 120px;
        

    }
    .profile>img,.history>img,.payment >img{
        border-radius: 400px;
        width: 200px;
        height: 200px;
        
       
        padding-left: 50px;
    }
    .profile{
        grid-column:   2/3 ;
        height: 300px;
        
    }
    
    .history{
        grid-column:   3/4 ;
        height: 300px;
    }
   
    .payment{
        grid-column:   4/5 ;
        height: 300px;
    }
    .profile:hover, .history:hover, .payment.hover{
        cursor: pointer;
    }

    .profile>h2, .history>h2, .payment>h2{
        padding-left: 115px;
        padding-top: 30px;
        font-size: 20px;
    }

</style>