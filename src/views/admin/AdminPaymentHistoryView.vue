<template>
    <div>
        <NavBar/>
        <div class="container">
            <PaymentHistoryTable
                :payments="filteredArray"
            />
            <PaymentHistoryFilters
                v-model:name="this.filters.name"
                v-model:status="this.filters.status"
                v-model:amount="this.filters.amount"
                @update:filters="updateFilters"
                @applyFilters="applyFilters"
                @resetFilters="resetFilters"
            />
        </div>
    </div>
</template>

<script>
import PaymentHistoryTable from '../../components/PaymentHistoryTable.vue';
import PaymentHistoryFilters from '../../components/PaymentHistoryFilters.vue';
import NavBar from '../../components/NavBar.vue';

export default {
    props: ["payments"],

    components: {
        PaymentHistoryTable,
        PaymentHistoryFilters,
        NavBar
    },

    data() {
        return {
            filters: {
                name: "",
                status: "",
                amount: "",
            },
            filteredArray: this.payments,
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
                origCopy = origCopy.filter(payment => payment.payingMemberId.name.toString().includes(this.filters.name));
            }

            if (this.filters.status) {
                origCopy = origCopy.filter(payment => payment.status === this.filters.status);
            }

            if (this.filters.amount) {
                origCopy = origCopy.filter(payment => payment.amountPaid === parseInt(this.filters.amount));
            }

            this.filteredArray = origCopy;
        },

        resetFilters() {
            this.filteredArray = this.copyPayments;
            this.filters.name = "";
            this.filters.status = "";
            this.filters.amount = "";
        },

        updateFilters(field, newValue) {
            this.filters[field] = newValue;
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

</style>
