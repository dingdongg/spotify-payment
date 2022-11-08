<template>
    <div class="container">
        <div class="filter-container">
            <form @submit.prevent="submitForm" class="filter-form">
                <h3>Filters</h3>
                <br />
                <input type="text" :value="name" placeholder="member name" class="input" @input="updateFilters('name', $event.target.value)">
                <fieldset class="input verification-status-box">
                    <legend style="text-align: center; margin-bottom: 5px;">verification status</legend>
                    <div class="radio-boxes input">
                        <div>
                            <input 
                                class="radio-circle" 
                                name="status" 
                                type="radio" 
                                value="approved" 
                                id="approved" 
                                @input="updateFilters('status', 'approved')"
                            >
                            <label 
                                for="approved" 
                                :class="status === 'approved' ? 'clickable' : ''"
                            >
                                approved
                            </label>
                        </div>
                        <div>
                            <input 
                                class="radio-circle" 
                                name="status" 
                                type="radio" 
                                value="pending" 
                                id="pending" 
                                @input="updateFilters('status', 'pending')"
                            >
                            <label 
                                for="pending"
                                :class="status === 'pending' ? 'clickable' : ''"
                            >
                                pending
                            </label>
                        </div>
                        <div>
                            <input 
                                class="radio-circle" 
                                name="status" 
                                type="radio" 
                                value="rejected" 
                                id="rejected" 
                                @input="updateFilters('status', 'rejected')"
                            >
                            <label 
                                for="rejected" 
                                :class="status === 'rejected' ? 'clickable' : ''"
                            >
                                rejected
                            </label>
                        </div>
                    </div>
                </fieldset>
                <input type="text" :value="amount" placeholder="amount paid" class="input" @input="updateFilters('amount', $event.target.value)">
                <div class="input buttons">
                    <div class="submit button-container">
                        <button type="submit" class="clickable">apply filters</button>
                    </div>
                    <div class="reset button-container">
                        <button type="button" class="clickable" @click="resetForm">reset filters</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {

    props: ["name", "status", "amount"],

    emits: [
        "applyFilters", 
        "resetFilters", 
        "update:filters",
    ],

    methods: {
        submitForm() {
            this.$emit("applyFilters");
        },

        resetForm() {
            this.$emit("resetFilters");
        },

        updateFilters(updatedField, value) {
            const formatted = updatedField.toLowerCase();
            this.$emit(`update:filters`, formatted, value);
        }
    }
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

    .radio-circle {
        display: none;
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