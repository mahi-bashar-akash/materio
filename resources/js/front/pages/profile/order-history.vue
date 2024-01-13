<template>

    <div class="col-12 col-lg-8">
        <div class="p-3">
            <div class="fs-5 fw-semibold ps-3 pb-3">Cart Details</div>
            <div class="table-responsive">
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th class="default-width">
                                <div class="text-truncate">
                                    Name
                                </div>
                            </th>
                            <th>
                                <div class="text-truncate">
                                    Price
                                </div>
                            </th>
                            <th>
                                <div class="text-truncate">
                                    Quantity
                                </div>
                            </th>
                            <th>
                                <div class="text-truncate">
                                    SubTotal
                                </div>
                            </th>
                            <th>
                                <div class="text-truncate">
                                    Status
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="each in submittedCartItem">
                            <td class="default-width">
                                <div class="text-truncate">
                                    <img :src="each.file_path" class="item" :alt="each.name">
                                    {{each.name}}
                                </div>
                            </td>
                            <td class="price">
                                <div class="text-truncate">
                                    {{each.price}}
                                </div>
                            </td>
                            <td class="quantity">
                                <div class="text-truncate">
                                    {{each.quantity}}
                                </div>
                            </td>
                            <td class="default-width">
                                <div class="text-truncate">
                                    {{ each.price * each.quantity }}
                                </div>
                            </td>
                            <td class="status">
                                <div class="text-truncate">
                                    <span class="py-2 px-4 badge bg-warning" v-if="each.status === '1'">
                                        Pending
                                    </span>
                                    <span class="py-2 px-4 badge bg-info" v-if="each.status === '2'">
                                        Processing
                                    </span>
                                    <span class="py-2 px-4 border border-success badge bg-success-subtle text-success" v-if="each.status === '3'">
                                        Shipped
                                    </span>
                                    <span class="py-2 px-4 badge bg-success" v-if="each.status === '4'">
                                        Delivered
                                    </span>
                                    <span class="py-2 px-4 badge bg-warning" v-if="each.status === '5'">
                                        Undelivered
                                    </span>
                                    <span class="py-2 px-4 border border-danger badge bg-danger-subtle text-danger" v-if="each.status === '6'">
                                        Returned
                                    </span>
                                    <span class="py-2 px-4 badge bg-danger" v-if="each.status === '7'">
                                        Cancelled
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<script>

export default {

    data(){

        return{
            submittedCartItem: [
                {id: 1, file_path: '/images/product/image-01.jpg', name: 'Product Name', price: '10', quantity: '1', status: '1' },
                {id: 2, file_path: '/images/product/image-02.jpg', name: 'Product Name', price: '20', quantity: '2', status: '2' },
                {id: 3, file_path: '/images/product/image-03.jpg', name: 'Product Name', price: '30', quantity: '3', status: '3' },
                {id: 4, file_path: '/images/product/image-04.jpg', name: 'Product Name', price: '40', quantity: '4', status: '4' },
                {id: 5, file_path: '/images/product/image-05.jpg', name: 'Product Name', price: '50', quantity: '5', status: '5' },
                {id: 6, file_path: '/images/product/image-06.jpg', name: 'Product Name', price: '60', quantity: '4', status: '6' },
                {id: 7, file_path: '/images/product/image-07.jpg', name: 'Product Name', price: '70', quantity: '3', status: '7' },
            ]
        }

    },

    mounted() {  },

    methods: {  }

}

</script>
