<template>

    <!-- header -->
    <div class="w-100 bg-light sticky-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 p-2 p-lg-4">
                    <router-link :to="{name: 'home'}" class="fw-bold fs-3 text-decoration-none text-dark">
                        {{app_name}}
                    </router-link>
                </div>
                <div class="col-lg-5 p-2 p-lg-4">
                    <div class="position-relative">
                        <input type="text" name="keyword" class="form-control ps-5" placeholder="Search Here" required autocomplete="new-search">
                        <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 p-2 p-lg-4 d-flex justify-content-end align-items-center">
                    <div class="d-flex align-items-center justify-content-start">
                        <a href="javascript:void(0)" class="btn bg-white border me-3 d-flex justify-content-center align-items-center">
                            <span class="d-inline-block d-sm-none">
                                <i class="bi bi-shop-window"></i>
                            </span>
                            <span class="d-none d-sm-inline-block">
                                Become a seller <i class="ms-2 bi bi-arrow-right-short"></i>
                            </span>
                        </a>
                        <button type="button" class="btn bg-white border position-relative me-3" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            <i class="bi bi-cart-fill"></i>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                                {{products.length}}
                            </span>
                        </button>
                        <div class="dropdown">
                            <button type="button" class="btn bg-white border" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-person-fill"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                                <li v-if="!userInfo">
                                    <a href="/auth/login" class="dropdown-item px-3 py-2">
                                        Login
                                    </a>
                                </li>
                                <li v-if="!userInfo">
                                    <a href="/auth/register" class="dropdown-item px-3 py-2">
                                        Registration
                                    </a>
                                </li>
                                <li v-if="userInfo">
                                    <router-link :to="{name: 'dashboard'}" class="dropdown-item px-3 py-2" @click="windowContent">
                                        Dashboard
                                    </router-link>
                                </li>
                                <li v-if="userInfo">
                                    <router-link :to="{name: 'productReview'}" class="dropdown-item px-3 py-2" @click="windowContent">
                                        Product Review
                                    </router-link>
                                </li>
                                <li v-if="userInfo">
                                    <router-link :to="{name: 'settings'}" class="dropdown-item px-3 py-2" @click="windowContent">
                                        Settings
                                    </router-link>
                                </li>
                                <li v-if="userInfo">
                                    <button type="button" class="dropdown-item px-3 py-2" @click="windowContent">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex align-items-center justify-content-start">
                        <router-link :to="{name: 'home'}" class="nav-link p-2 p-lg-3">
                            Home
                        </router-link>
                        <router-link :to="{name: 'about'}" class="nav-link p-2 p-lg-3">
                            About us
                        </router-link>
                        <router-link :to="{name: 'contact'}" class="nav-link p-2 p-lg-3">
                            Contact
                        </router-link>
                        <router-link :to="{name: 'shop'}" class="nav-link p-2 p-lg-3">
                            Shop
                        </router-link>
                        <router-link :to="{name: 'blog'}" class="nav-link p-2 p-lg-3">
                            Blog
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- right sidebar as offcanvas -->
    <div class="offcanvas offcanvas-end p-3 cursor-content-menu" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Cart</h5>
            <button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body p-0">

            <!-- no data text -->
            <div class="d-flex justify-content-center align-items-center flex-column h-100" v-if="products.length === 0">
                <i class="bi bi-bag fs-1 mb-3 d-block"></i>
                <small class="mb-3 fw-semibold">
                    No product add in your cart
                </small>
                <button type="button" class="btn btn-outline-theme d-flex justify-content-center align-items-center" data-bs-dismiss="offcanvas" @click="goRoute">
                    Continue Shopping
                </button>
            </div>

            <div class="cart-body" v-if="products.length !== 0">

                <!-- cart item -->
                <div class="cart-item rounded-3 p-1 d-flex align-items-center" v-for="(cartItem, index) in products" :key="index">
                    <div class="position-relative">
                        <img :src="cartItem.file_path" class="img-fluid wpx-105 hpx-105 shadow rounded-3" alt="cart product image">
                        <div class="position-absolute end-0 bottom-0 p-1">
                            <button type="button" class="border-0 bg-theme text-white rounded-3" @click="removeFromCart(cartItem)">
                                <i class="bi bi-trash2"></i>
                            </button>
                        </div>
                    </div>
                    <div class="ms-3">
                        <div class="fw-semibold">{{cartItem.name}} (1Kg)</div>
                        <div class="text-secondary d-flex justify-content-between font-14 my-2"><span>Price: ${{cartItem.price}}</span> <span>Total: ${{cartItem.price * cartItem.quantity}}</span></div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center border rounded-3 wpx-170">
                                <button class="btn border-0" type="button" @click="decrementQuantity(cartItem)">
                                    <i class="bi bi-dash"></i>
                                </button>
                                <input type="text" disabled class="form-control cursor-content-menu text-center border-0 bg-transparent mx-2" v-model="cartItem.quantity" min="1" max="5" />
                                <button class="btn border-0" type="button" @click="incrementQuantity(cartItem)">
                                    <i class="bi bi-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="px-3 mt-3" v-if="products.length !== 0">
                <div class="row">
                    <div class="col-6">
                        <button type="button" class="btn btn-theme w-100" data-bs-dismiss="offcanvas" @click="goCartDetails">
                            Cart Details
                        </button>
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-outline-theme w-100" data-bs-dismiss="offcanvas" @click="windowContent">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>

import store from "../../../store/index";

export default {

    computed: {

        products: function() {
            return store.state.products
        },

    },

    data(){

        return{
            app_name: window.core.APP_NAME,
            userInfo: true,
            cartItem: [],
        }

    },

    mounted() {

        this.getCartItems();

    },

    methods: {

        getCartItems(){
            store.dispatch('getCartItems')
        },

        decrementQuantity(cartItem) {
            if (cartItem.quantity > 1) {
                cartItem.quantity--;
                this.subTotal -= cartItem.price
                store.dispatch('decrementCartItem', cartItem)
            }
        },

        incrementQuantity(cartItem) {
            if (cartItem.quantity < 5) {
                cartItem.quantity++;
                this.subTotal += cartItem.price
                store.dispatch('addToCart', cartItem)
            }
        },

        removeFromCart(cartItem) {
            store.dispatch('removeFromCart', cartItem)
        },

        goRoute(){
            this.windowContent();
            this.$router.push( {name: 'shop'} )
        },

        windowContent(){
            window.scrollTo(0, 0);
        },

        goCartDetails(){
            this.windowContent();
            this.$router.push( {name: 'cart'} );
        }

    }

}

</script>
