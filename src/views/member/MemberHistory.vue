<template>
    <div class="container">
        <div class="table-container">
            <table style="width: 100%;">
                <thead class="table-header">
                    <tr class="header-height">
                        <th class="column-width">Member</th>
                        <th class="column-width">Name</th>
                        <th class="column-width">Date Paid</th>
                        <th class="column-width">Amount</th>
                        <th class="column-width">Status</th>
                    </tr>
                </thead>
                <tbody>
                   
                    <tr class="row-height">
                        <td class="column-width"  >
                            <img src="../../components/icons/penguin-boba.jpg" alt="profile picture" class="profile-picture">
                        </td>
                        <td class="column-width">mahkel</td>
                        <td class="column-width">oct 22</td>
                        <td class="column-width">$ 24</td>
                        <td class="column-width">Approved</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {

    props: ["payments"],
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
