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
            <form @submit.prevent="applyFilters">
                <h3>Filters</h3>
                <br />
                <input type="text" v-model="this.filters.name" placeholder="member name">
                <fieldset>
                    <legend>verification status</legend>
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
                </fieldset>
                <input type="text" v-model="this.filters.amountPaid" placeholder="amount paid">
                <div>
                    <button type="submit">apply filters</button>
                    <button type="button" @click="resetFilters">reset filters</button>
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
    .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100vh;
        background-color: #1F2833;
        color: white;   
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

    tr {
        display: flex;
        justify-content: space-around;
        align-items: center;
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
</style>