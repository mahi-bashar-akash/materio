<template>

    <div class="col-12 col-lg-8">

        <!-- customer product performance -->
        <div class="px-3">
            <div class="row">
                <div class="col-12 mb-3">
                    <div class="p-3 bg-white shadow rounded-3 text-success d-flex justify-content-between align-items-center">
                        <div class="d-flex justify-content-start align-items-center">
                            <i class="bi bi-check-all me-2 py-1 px-2 border rounded-3"></i>
                            Complete
                        </div>
                        <span class="badge bg-success">
                            {{profileCountActivity.complete}}
                        </span>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="p-3 bg-white shadow rounded-3 text-warning d-flex justify-content-between align-items-center">
                        <div class="d-flex justify-content-start align-items-center">
                            <i class="bi bi-hourglass-split me-2 py-1 px-2 border rounded-3"></i>
                            Pending
                        </div>
                        <span class="badge bg-warning text-dark">
                            {{profileCountActivity.pending}}
                        </span>
                    </div>
                </div>
                <div class="col-12">
                    <div class="p-3 bg-white shadow rounded-3 text-danger d-flex justify-content-between align-items-center">
                        <div class="d-flex justify-content-start align-items-center">
                            <i class="bi bi-trash2 me-2 py-1 px-2 border rounded-3"></i>
                            Cancellation
                        </div>
                        <span class="badge bg-danger">
                            {{profileCountActivity.cancellation}}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-3">

            <div class="rounded-3 overflow-hidden bg-white shadow">

                <div class="fs-5 fw-semibold p-3">Order History</div>

                <!-- customer order history table data -->
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th class="checkbox">
                                <input type="checkbox" class="form-checkbox">
                            </th>
                            <th class="default-width">
                                Date.
                            </th>
                            <th class="id">
                                Order Id.
                            </th>
                            <th class="default-width">
                                Product Name.
                            </th>
                            <th class="default-width">
                                Total.
                            </th>
                            <th class="default-width">
                                Payment Status.
                            </th>
                            <th class="default-width">
                                Payment Method.
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="each in orderTable">
                            <td class="checkbox">
                                <input type="checkbox" class="form-checkbox">
                            </td>
                            <td class="default-width">
                                {{each.date}}
                            </td>
                            <td class="default-width">
                                {{each.id}}
                            </td>
                            <td class="default-width">
                                {{each.product_name}}
                            </td>
                            <td class="default-width">
                                {{each.total}}
                            </td>
                            <td class="default-width">
                                <span class="badge px-3 py-2" :style="`background-color: `+each.backgroundColor +`; color:` +each.color">
                                    {{each.status}}
                                </span>
                            </td>
                            <td class="default-width">
                                {{each.payment_method}}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <!-- customer order history table data pagination -->
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center mt-3">
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0)">
                                <i class="bi bi-chevron-left"></i>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li class="page-item active">
                            <a class="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                <i class="bi bi-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    </div>

</template>

<script>

export default {

    data(){

        return{
            /* Data properties for the component */
            profileCountActivity: {
                complete: '100',
                pending: '25',
                cancellation: '40',
            },

            orderTable: [
                { id: '#SK2540', product_name: 'Product Name', date: '07 Oct, 2021', total: '$400', status: 'Paid', backgroundColor: '#34C38F2D', color: '#34c38f', payment_method: 'Mastercard' },
                { id: '#SK2541', product_name: 'Product Name', date: '07 Oct, 2021', total: '$380', status: 'Chargeback', backgroundColor: '#F46A6A2D', color: '#f46a6a', payment_method: 'Visa' },
                { id: '#SK2542', product_name: 'Product Name', date: '06 Oct, 2021', total: '$384', status: 'Paid', backgroundColor: '#34C38F2D', color: '#34c38f', payment_method: 'Paypal' },
                { id: '#SK2543', product_name: 'Product Name', date: '05 Oct, 2021', total: '$412', status: 'Paid', backgroundColor: '#34C38F2D', color: '#34c38f', payment_method: 'Mastercard' },
                { id: '#SK2544', product_name: 'Product Name', date: '04 Oct, 2021', total: '$404', status: 'Refund', backgroundColor: '#F1B44C2D', color:'#f1b44c', payment_method: 'Visa' },
                { id: '#SK2545', product_name: 'Product Name', date: '04 Oct, 2021', total: '$392', status: 'Paid', backgroundColor: '#34C38F2D', color: '#34c38f', payment_method: 'Paypal' },
            ],
        }

    },

    mounted() {  },

    methods: {  }

}

</script>
