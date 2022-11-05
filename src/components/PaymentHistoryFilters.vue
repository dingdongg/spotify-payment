<template>
    <div class="container">
        <div class="filter-container">
            <form @submit.prevent="applyFilters" class="filter-form">
                <h3>Filters</h3>
                <br />
                <input type="text" v-model="this.filters.name" placeholder="member name" class="input">
                <fieldset class="input verification-status-box">
                    <legend style="text-align: center; margin-bottom: 5px;">verification status</legend>
                    <div class="radio-boxes input">
                        <div>
                            <input v-model="this.filters.status" type="radio" value="approved" id="approved">
                            <label for="approved">approved</label>
                        </div>
                        <div>
                            <input v-model="this.filters.status" type="radio" value="pending" id="pending">
                            <label for="pending">pending</label>
                        </div>
                        <div>
                            <input v-model="this.filters.status" type="radio" value="rejected" id="rejected">
                            <label for="rejected">rejected</label>
                        </div>
                    </div>
                </fieldset>
                <input type="text" v-model="this.filters.amountPaid" placeholder="amount paid" class="input">
                <div class="input buttons">
                    <div class="submit button-container">
                        <button type="submit" class="clickable">apply filters</button>
                    </div>
                    <div class="reset button-container">
                        <button type="button" class="clickable" @click="resetFilters">reset filters</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    props: ["applyFilters", "resetFilters"],

    data() {
        return {
            filters: {
                name: "",
                status: "",
                amountPaid: "",
            },
        }
    },
}

</script>

<style scoped>

    tr, .container, .buttons {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .container {
        height: 100vh;
        background-color: #1F2833;
        color: #66FCF1;   
    }

    .filter-container {
        font-size: 24px;
        border: 2px solid #66FCF1;
        padding: 1.5em;
        border-radius: 10px;
    }
    .filter-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .input {
        margin: 5px 5px;
        font-size: 18px;
    }

    .radio-boxes {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .buttons {
        position: relative;
        top: 1.2em;
    }

    .button-container {
        margin: 5px;
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

    button {
        padding: 1.1em;
        font-size: 18px;
    }

    .clickable:hover {
        border: 2px solid #66fcf1;
    }

    .verification-status-box {
        width: 100%;
    }
</style>