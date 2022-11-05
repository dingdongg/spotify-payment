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
}

</script>

<style scoped>

    tr, .container {
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
</style>