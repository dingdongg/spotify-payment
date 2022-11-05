<template>
    <div class="container">
        <h1 class="welcome-message">Welcome, {{ name }}</h1>
        <div class="members-container">
            <li v-for="member in members" :key="member.id" class="member" @click="checkoutMember(member)">
                
                <img class="profile-picture" :src="member.profilePicUrl" alt="profile pic for {{ member.name }}">
                {{ member.name }}
                
                
            </li>
            <button type="button" @click="addNewMember">
                <img src="../assets/172525_plus_icon.png" alt="add member" class="profile-picture">
            </button>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import router from '../router';


export default {
    props: ["name", "members"],
    name: "AdminHomeView",
    data() {
        return {
            notificationPopupOpen: false,
        }
    },

    methods: {
        toggleNotificationPopup() {
            this.notificationPopupOpen = !this.notificationPopupOpen;
        },

        checkoutMember(member) {
            router.push(`/admin-home/user/${member.id}`)
            console.log(`checking out ${member.name}'s profile`);
        },

        addNewMember() {
            console.log("adding new member!");
        }
    },
}

</script>


<style scoped>
    .container {
        background-color: #0b0C10;
        color: white;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: roboto, 'Noto Sans Myanmar UI', arial, sans-serif;
    }

    .welcome-message {
        position: relative;
        bottom: 20vh;
        font-size: 36px;
    }

    .profile-picture {
        width: 150px;
        height: auto;
        border: solid 2px #1F2833;
        border-radius: 100%;
    }

    .members-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .member {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }
</style>