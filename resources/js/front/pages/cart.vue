<template>

    <!-- cart details -->
    <div class="my-3">
        <span class="fs-4 fw-semibold p-2">
            Cart Details
        </span>
    </div>

    <div class="bg-white shadow rounded-2 p-3 overflow-hidden cursor-content-menu">
        <div class="d-flex justify-content-center align-items-center flex-column hpx-450 w-100"
             v-if="products.length === 0">

            <!-- if cart item length 0 -->
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

            <!-- if cart item greater then 0 -->
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
                                <i class="bi bi-trash2 text-danger"></i>
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

    <!-- total amount to cost -->
    <div class="d-flex justify-content-end">
        <div class="bg-white shadow rounded-2 p-3 overflow-hidden cursor-content-menu col-lg-6 mt-3"
             v-if="products.length !== 0">
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
    </div>

    <div class="py-4">
        <div class="d-flex justify-content-between align-items-center">
            <button type="button" class="btn btn-outline-theme" @click="continueShopping()">
                Continue shopping
            </button>
            <button type="button" class="btn btn-outline-theme" @click="getCheckout()">
                Order placed
            </button>
        </div>
    </div>

    <!-- related product area -->
    <section class="w-100 container-fluid mt-4">
        <div class="fw-bold text-center fs-3">
            Related Products
        </div>
        <div class="product-carousel owl-carousel owl-theme">
            <div class="item" v-for="each in dealOfTheDaysProduct">
                <div class="product-item bg-white">
                    <img :src="each.file_path" class="product-image img-fluid" :alt="each.name">
                    <div class="text-uppercase text-secondary text-opacity-50 text-center">
                        {{ each.category }}
                    </div>
                    <div class="mt-2 fw-semibold text-center">{{ each.name }}</div>
                    <div class="mt-2 text-center">
                        <span v-if="each.review === '1'">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                        </span>
                        <span v-if="each.review === '2'">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                        </span>
                        <span v-if="each.review === '3'">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                        </span>
                        <span v-if="each.review === '4'">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star text-warning mx-1"></i>
                        </span>
                        <span v-if="each.review === '5'">
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                            <i class="bi bi-star-fill text-warning mx-1"></i>
                        </span>
                    </div>
                    <div class="text-theme text-center mt-2">${{ each.price }}</div>
                    <div class="product-active">
                        <button type="button" class="btn btn-theme me-1" @click="addToCart(each)">
                            <i class="bi bi-cart"></i>
                        </button>
                        <button type="button" class="btn btn-theme" @click="productInfo">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

import store from "../../store/index.js";

export default {

    computed: {
        /* Data computed */
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
            /* Data properties for the component */
            selectedShippingFee: 50,
            dealOfTheDaysProduct: [
                {
                    id: '8',
                    file_path: '/images/product/image-08.jpg',
                    name: 'Product Name',
                    price: '45',
                    category: 'Category Name',
                    review: '1'
                },
                {
                    id: '9',
                    file_path: '/images/product/image-09.jpg',
                    name: 'Product Name',
                    price: '50',
                    category: 'Category Name',
                    review: '2'
                },
                {
                    id: '10',
                    file_path: '/images/product/image-10.jpg',
                    name: 'Product Name',
                    price: '55',
                    category: 'Category Name',
                    review: '3'
                },
                {
                    id: '11',
                    file_path: '/images/product/image-11.jpg',
                    name: 'Product Name',
                    price: '60',
                    category: 'Category Name',
                    review: '4'
                },
                {
                    id: '12',
                    file_path: '/images/product/image-12.jpg',
                    name: 'Product Name',
                    price: '65',
                    category: 'Category Name',
                    review: '5'
                },
                {
                    id: '13',
                    file_path: '/images/product/image-13.jpg',
                    name: 'Product Name',
                    price: '70',
                    category: 'Category Name',
                    review: '3'
                },
                {
                    id: '14',
                    file_path: '/images/product/image-14.jpg',
                    name: 'Product Name',
                    price: '75',
                    category: 'Category Name',
                    review: '2'
                },
            ],
        }

    },

    mounted() {

        this.product();

    },

    methods: {

        /* Function to go route as shop */
        goRoute() {
            this.$router.push({name: 'shop'})
        },

        /* Function to remove from cart */
        removeFromCart(cartItem) {
            store.dispatch('removeFromCart', cartItem)
        },

        /* Function to product */
        product() {
            $('.product-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 4
                    }
                }
            })
        },

        /* Function to go route as product information */
        productInfo() {
            this.$router.push({name: 'productDetails'})
        },

        /* Function to add to cart */
        addToCart(product) {
            store.dispatch('addToCart', product)
        },

        /* Function to go route as continue shopping */
        continueShopping() {
            this.$router.push({name: 'shop'})
        },

        /* Function to go route as get checkout */
        getCheckout() {
            this.$router.push({name: 'checkout'})
        }

    }

}

</script>
