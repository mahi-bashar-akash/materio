<template>

    <!-- header -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container p-3">
            <router-link :to="{name: 'home'}" class="navbar-brand" @click="windowContent">
                {{app_name}}
            </router-link>
            <button class="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{name: 'shop'}" class="nav-link" @click="windowContent">
                            Shop
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'contact'}" class="nav-link" @click="windowContent">
                            Contact
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'blog'}" class="nav-link" @click="windowContent">
                            Blog
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a href="/auth/login" class="nav-link" v-if="!userInfo">
                            Login
                        </a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item me-2 mb-2 mb-lg-0">
                        <form class="position-relative" role="search">
                            <input class="form-control ps-5" type="search" placeholder="Search Here" aria-label="Search">
                            <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                                <i class="bi bi-search"></i>
                            </div>
                        </form>
                    </li>
                    <li class="nav-item me-2 mb-2 mb-lg-0">
                        <button type="button" class="nav-link bg-white border px-3 hpx-45 rounded-3 position-relative" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            <i class="bi bi-cart-fill text-theme"></i>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                                {{products.length}}
                            </span>
                        </button>
                    </li>
                    <li class="nav-item dropdown me-2" v-if="userInfo">
                        <button type="button" class="nav-link bg-white border px-3 hpx-45 rounded-3" href="javascript:void(0)" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-circle text-theme"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                            <li>
                                <router-link :to="{name: 'dashboard'}" class="dropdown-item px-3 py-2" @click="windowContent">
                                    Dashboard
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'productReview'}" class="dropdown-item px-3 py-2" @click="windowContent">
                                    Product Review
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'settings'}" class="dropdown-item px-3 py-2" @click="windowContent">
                                    Settings
                                </router-link>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item px-3 py-2" @click="windowContent">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="/auth/login" class="nav-link">
                            Become a seller
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

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
