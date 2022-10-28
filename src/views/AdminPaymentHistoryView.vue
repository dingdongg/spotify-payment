<template>
    <div class="container">
        <table>
            <tr v-for="payment in filteredArray" :key="payment.payingMemberId">
                <td>Member ID = {{ payment.payingMemberId }}</td>
                <td>{{ payment.datePaid }}</td>
                <td>${{ payment.amountPaid }}</td>
                <td>{{ payment.status }}</td>
            </tr>
        </table>
        <div>
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
                origCopy = origCopy.filter(payment => toString(payment.amountPaid).includes(this.amountPaid));
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
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>