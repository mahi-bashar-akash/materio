<template>

    <!-- search -->
    <div class="p-3">
        <div class="row">
            <div class="col-md-6 mb-3">
                <div class="position-relative">
                    <input type="text" name="keyword" class="form-control ps-5" placeholder="Search Here" required
                           autoComplete="new-search">
                    <div class="position-absolute top-50 start-0 ps-1 translate-middle-y">
                        <i class="ps-3 bi bi-search"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- order list -->
    <div class="customer-card-body bg-white border rounded-2 p-3">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th class="checkbox">
                            <input type="checkbox" name="checkbox" class="form-check-input">
                        </th>
                        <th class="id">
                            Id.
                        </th>
                        <th class="name">
                            Customer Name.
                        </th>
                        <th class="default-width">
                            Order Name.
                        </th>
                        <th class="default-width">
                            Price * Quantity
                        </th>
                        <th class="default-width">
                            SubTotal
                        </th>
                        <th class="status">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="each in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]">
                        <td class="checkbox">
                            <input type="checkbox" name="checkbox" class="form-check-input">
                        </td>
                        <td class="id">
                            {{ each }}
                        </td>
                        <td class="name">
                            <div class="d-flex align-items-center justify-content-start">
                                <img :src="`/images/clients/face-1.png`" class="img-fluid me-2 face" alt="avatar">
                                Customer Name {{ each }}
                            </div>
                        </td>
                        <td class="default-width">
                            Order Name
                        </td>
                        <td class="default-width">
                            $100 * 3
                        </td>
                        <td class="default-width">
                            $300
                        </td>
                        <td class="default-width">
                            <select name="" id="" class="form-select">
                                <option value="1">Pending</option>
                                <option value="2">Processing</option>
                                <option value="3">Shipped</option>
                                <option value="4">Delivered</option>
                                <option value="5">Undelivered</option>
                                <option value="6">Returned</option>
                                <option value="7">Cancelled</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>

export default {

    data() {

        return {}

    },

    mounted() {


    },

    methods: {

        manageProductOpen() {
            const myModal = new bootstrap.Modal("#manageModal", {keyboard: false, backdrop: 'static'});
            myModal.show();
        },

        manageProductClose() {
            let myModalEl = document.getElementById('manageModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

        deleteProductOpen() {
            const myModal = new bootstrap.Modal("#deleteModal", {keyboard: false, backdrop: 'static'});
            myModal.show();
        },

        deleteProductClose() {
            let myModalEl = document.getElementById('deleteModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

    }

}

</script>
