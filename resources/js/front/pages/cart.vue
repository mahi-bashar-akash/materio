<template>

    <div class="my-3 fs-4 fw-semibold">
        Cart Details
    </div>

    <div class="bg-white shadow rounded-2 p-3 overflow-hidden cursor-content-menu">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th class="checkbox">
                            <input type="checkbox" name="" class="form-check-input">
                        </th>
                        <th class="name">
                            Name.
                        </th>
                        <th class="price">
                            Price.
                        </th>
                        <th class="quantity">
                            Quantity.
                        </th>
                        <th class="default-width">
                            Subtotal
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="each in cartDetails">
                        <td class="checkbox">
                            <input type="checkbox" name="" class="form-check-input">
                        </td>
                        <td class="name">
                            <div class="d-flex align-items-center justify-content-start">
                                <img :src="each.file_path" class="wpx-45 hpx-45 rounded-circle" alt="avatar">
                                <span class="ms-2">
                                    {{ each.name }}
                                </span>
                            </div>
                        </td>
                        <td class="price">
                            ${{ each.price }}
                        </td>
                        <td class="quantity">
                            {{ each.quantity }}
                        </td>
                        <td class="default-width">
                            ${{ each.price * each.quantity }}
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3"></th>
                        <th>
                            Total
                        </th>
                        <th>
                            ${{totalAmount}}
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>

    <div class="bg-white shadow rounded-2 p-3 overflow-hidden cursor-content-menu col-lg-6 mt-3">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th class="default-width">
                            Description
                        </th>
                        <th class="default-width">
                            Amount
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="default-width">
                            Product Total Expense
                        </td>
                        <td class="default-width">
                            $500
                        </td>
                    </tr>
                    <tr>
                        <td class="default-width">
                            shipping fees
                        </td>
                        <td class="default-width">
                            <select name="shipping-fees" class="form-select">
                                <option value="">Inside Country - $50</option>
                                <option value="">Outside Country - $120</option>
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

    computed: {
        totalAmount() {
            return this.cartDetails.reduce((acc, curr) => acc + (parseInt(curr.price) * parseInt(curr.quantity)), 0);
        }
    },

    data() {

        return {
            cartDetails: [
                {id: '1', file_path: '/images/product/image-01.jpg', name: 'Product Name', price: '5', quantity: '1'},
                {id: '2', file_path: '/images/product/image-02.jpg', name: 'Product Name', price: '10', quantity: '2'},
                {id: '3', file_path: '/images/product/image-03.jpg', name: 'Product Name', price: '15', quantity: '3'},
                {id: '4', file_path: '/images/product/image-04.jpg', name: 'Product Name', price: '20', quantity: '4'},
                {id: '5', file_path: '/images/product/image-05.jpg', name: 'Product Name', price: '25', quantity: '5'},
                {id: '6', file_path: '/images/product/image-06.jpg', name: 'Product Name', price: '30', quantity: '4'},
                {id: '7', file_path: '/images/product/image-07.jpg', name: 'Product Name', price: '35', quantity: '3'},
            ]
        }

    },

    mounted() {


    },

    methods: {}

}

</script>
