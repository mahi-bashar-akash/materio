<template>

    <div class="my-3">
        <span class="fs-4 fw-semibold p-2">
            Cart Details
        </span>
    </div>

    <div class="bg-white shadow rounded-2 p-3 overflow-hidden cursor-content-menu">
        <div class="d-flex justify-content-center align-items-center flex-column hpx-450 w-100"
             v-if="products.length === 0">
            <i class="bi bi-bag fs-1 mb-3 d-block"></i>
            <small class="mb-3 fw-semibold">
                No product add in your cart
            </small>
            <button type="button" class="btn btn-outline-theme d-flex justify-content-center align-items-center"
                    data-bs-dismiss="offcanvas" @click="goRoute">
                Continue Shopping
            </button>
        </div>
        <div class="table-responsive" v-if="products.length !== 0">
            <table class="table">
                <thead>
                <tr>
                    <th class="name">
                        Name.
                    </th>
                    <th class="default-width text-center">
                        Price * Quantity
                    </th>
                    <th class="default-width text-center">
                        Subtotal
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(cartItem, index) in products" :key="index">
                    <td class="name">
                        <div class="d-flex align-items-center justify-content-start">
                            <button type="button" class="btn-icon me-2" @click="removeFromCart(cartItem)">
                                <i class="bi bi-trash2 text-theme"></i>
                            </button>
                            <img :src="cartItem.file_path" class="wpx-45 hpx-45 rounded-circle" alt="avatar">
                            <span class="ms-2">
                                    {{ cartItem.name }}
                                </span>
                        </div>
                    </td>
                    <td class="default-width text-center">
                        ${{ cartItem.price }} * {{ cartItem.quantity }}
                    </td>
                    <td class="default-width text-center">
                        ${{ cartItem.price * cartItem.quantity }}
                    </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <th colspan="2">
                        Amount of subtotal
                    </th>
                    <th class="text-center">
                        ${{ totalAmount }}
                    </th>
                </tr>
                </tfoot>
            </table>
        </div>
    </div>

    <div class="bg-white shadow rounded-2 p-3 overflow-hidden cursor-content-menu col-lg-6 mt-3" v-if="products.length !== 0">
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
                        Amount of subtotal
                    </td>
                    <td class="default-width">
                        ${{ totalAmount }}
                    </td>
                </tr>
                <tr>
                    <td class="default-width">
                        shipping fees
                    </td>
                    <td class="default-width">
                        <select name="shipping-fees" class="form-select" v-model="selectedShippingFee">
                            <option value="50">Inside Country - $50</option>
                            <option value="120">Outside Country - $120</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="default-width">
                        total
                    </td>
                    <td class="default-width">
                        ${{ totalAmountWithShipping }}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>

import store from "../../store/index.js";

export default {

    computed: {

        totalAmount() {
            return this.products.reduce((acc, curr) => acc + (parseInt(curr.price) * parseInt(curr.quantity)), 0);
        },

        totalAmountWithShipping() {
            return this.totalAmount + parseInt(this.selectedShippingFee);
        },

        products: function () {
            return store.state.products
        },

    },

    data() {

        return {
            selectedShippingFee: 50,
            selected: [],
        }

    },

    mounted() {


    },

    methods: {

        goRoute() {
            this.$router.push({name: 'shop'})
        },

        removeFromCart(cartItem) {
            store.dispatch('removeFromCart', cartItem)
        },

    }

}

</script>
