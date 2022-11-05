<template>
    <div class="container">
        <PaymentHistoryTable
            :payments="payments"
        />
        <PaymentHistoryFilters
            @submit.prevent="applyFilters"
            @click="resetFilters"
        />
    </div>
</template>

<script>
import PaymentHistoryTable from '../components/PaymentHistoryTable.vue';
import PaymentHistoryFilters from '../components/PaymentHistoryFilters.vue';

export default {
    props: ["payments"],

    components: {
        PaymentHistoryTable,
        PaymentHistoryFilters,
    },

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