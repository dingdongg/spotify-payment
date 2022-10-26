<template>
    <div class="container">
        <table>
            <tr v-for="payment in this.filteredArray" :key="payment.payingMemberId">
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
                <div><button type="submit">apply filters</button></div>
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
            console.log("FILTERING");

            if (this.filters.name) {
                console.log('filter name');
                this.filteredArray.filter(payment => payment.payingMemberId === this.filters.name);
            }

            if (this.filters.status) {
                console.log('filter status');
                this.filteredArray.filter(payment => payment.status === this.filters.status);
            }

            if (this.filters.amountPaid) {
                console.log('filter amount paid');
                this.filteredArray.filter(payment => toString(payment.amountPaid).includes(this.amountPaid));
            }
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