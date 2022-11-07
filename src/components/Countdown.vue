<!-- code retrieved from : https://www.youtube.com/watch?v=rpDHNp1Ajf8&ab_channel=FrontendGuy%21 -->

<template>

    <div class="timebox">
        <p>{{days}} days</p>
        <p>{{hours % 24}} hours</p>
        <p>{{minutes % 60}} min</p>
        <p>{{seconds % 60}} sec</p>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';

export default{
    data(){
        const days= ref(0);
        const hours= ref(0);
        const minutes= ref(0);
        const seconds= ref(0);
        const launchDate = new Date('1 December 2022');

        setInterval(()=>{
            const currDate = new Date();
            const launchTime = launchDate- currDate;

            seconds.value = parseInt(launchTime /1000);
            minutes.value = parseInt(seconds.value /60);
            hours.value = parseInt(minutes.value /60);
            days.value = parseInt(hours.value /24);
        }, 1000);

        return {days, hours, minutes, seconds}
    }

}
</script>


<style scoped>

.timebox{
    width: 50%;
    margin-left: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transform: translateY(50px);
}

.timebox>p{
    
   
    width: 100px;
    height: 100px;
}
</style>