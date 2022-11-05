<template>
    <div class="container">
        <div class="table-container">
            <table style="width: 100%;">
                <thead class="table-header">
                    <tr class="header-height">
                        <th class="column-width">Member</th>
                        <th class="column-width">Date Paid</th>
                        <th class="column-width">Amount</th>
                        <th class="column-width">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="payment in filteredArray" :key="payment.payingMemberId" class="row-height">
                        <td class="column-width">
                            <img :src="payment.payingMemberId.profilePicUrl" alt="profile picture" class="profile-picture">
                        </td>
                        <td class="column-width">{{ payment.datePaid.toDateString() }}</td>
                        <td class="column-width">${{ payment.amountPaid }}</td>
                        <td class="column-width">{{ payment.status }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
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

    props: ["payments"],

    data() {
        return {
            filters: {
                name: "",
                status: "",
                amountPaid: "",
            },
            filteredArray: this.payments.map(p => {return {...p}}),
        }
    },

    computed: {
        copyPayments() {
            return this.payments.map(p => {return {...p}});
        },
    },

    methods: {
        applyFilters() {
            let origCopy = this.copyPayments;

            if (this.filters.name) {
                origCopy = origCopy.filter(payment => payment.payingMemberId.toString().includes(this.filters.name));
            }

            if (this.filters.status) {
                origCopy = origCopy.filter(payment => payment.status === this.filters.status);
            }

            if (this.filters.amountPaid) {
                origCopy = origCopy.filter(payment => payment.amountPaid === this.filters.amountPaid);
            }

            this.filteredArray = origCopy;
        },

        resetFilters() {
            this.filteredArray = this.copyPayments;
            this.filters.name = "";
            this.filters.status = "";
            this.filters.amountPaid = "";
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

    .table-container {
        height: 80vh;
        overflow-y: scroll;
        scrollbar-width: none;          /* firefox */
        -ms-overflow-style: none;       /* MS explorer */
        width: 55vw;
    }

    .table-container::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .column-width {
        width: 25%;
    }

    .header-height {
        height: 5vh;
    }

    .row-height {
        height: 10vh;
    }

    td, th {
        text-align: center;
    }

    .profile-picture {
        width: 75px;
    }

    thead th {
        font-weight: bolder;
        font-size: larger;
    }

    .table-header {
        border-bottom: solid 2px white;
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