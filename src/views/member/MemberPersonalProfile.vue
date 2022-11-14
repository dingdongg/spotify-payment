
<template>


    <div class="container">
        <div class="userprofile">
            <img src="../../components/icons/penguin-boba.jpg">
            <h4>PROFILE</h4>
            <h1>mahkel</h1>
        </div>
        <div class="stats">
            <h1>last payment: $30</h1>
            <h1>amount owed: $30</h1>
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