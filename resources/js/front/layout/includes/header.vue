<template>

    <!-- header top -->
    <header class="w-100 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 pt-3 pb-2 pb-lg-0 px-3 d-none d-lg-inline-block">
                    <!-- logo show in large screen -->
                    <router-link :to="{name: 'home'}" class="fs-3 fw-semibold text-decoration-none text-dark" @click="windowContent">
                        {{app_name}}
                    </router-link>
                </div>
                <div class="col-12 col-lg-6 pt-3 pb-4 px-3">
                    <!-- search product global -->
                    <div class="position-relative">
                        <input type="text" name="keyword" class="form-control ps-5" required autocomplete="new-search" placeholder="Search here">
                        <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 pt-3 pb-2 pb-lg-0 px-3 d-none d-lg-inline-block">
                    <!-- help center -->
                    <div class="d-flex align-items-center justify-content-end">
                        <i class="bi bi-headset me-2 fs-1"></i>
                        <div class="ms-2">
                            <div class="fs-6 fw-semibold">Hotline</div>
                            <div class="text-theme">01400125289</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- header content menu -->
    <header class="sticky-top w-100 bg-light pb-2 px-2 pb-lg-0">
        <nav class="navbar navbar-expand-lg container">
            <div class="container-fluid">
                <!-- logo show in small screen -->
                <router-link class="navbar-brand d-lg-none" :to="{name: 'home'}" @click="collapse">
                    {{app_name}}
                </router-link>
                <button class="navbar-toggler border-0" type="button" @click="collapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- menu list left corner -->
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item text-end d-inline-block d-lg-none">
                            <button type="button" class="btn btn-close border-0 p-3 icon-close" @click="collapse"></button>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'home'}" @click="collapse">
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'shop'}" @click="collapse">
                                Shop
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'about'}" @click="collapse">
                                About
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'contact'}" @click="collapse">
                                Contact
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'blog'}" @click="collapse">
                                Blog
                            </router-link>
                        </li>
                    </ul>

                    <!-- menu list right corner -->
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/auth/login" @click="collapse">
                                Become a seller
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                               aria-controls="offcanvasExample" @click="collapse">
                                Cart
                                <span class="badge bg-light-theme border-theme text-theme ms-2">
                                    {{ products.length }}
                                </span>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <!-- profile dropdown menu -->
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mahi Bashar Akash
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden">
                                <li v-if="!userInfo">
                                    <a href="/auth/login" class="dropdown-item px-3 py-2" @click="collapse">
                                        Login
                                    </a>
                                </li>
                                <li v-if="!userInfo">
                                    <a href="/auth/register" class="dropdown-item px-3 py-2" @click="collapse">
                                        Registration
                                    </a>
                                </li>
                                <li v-if="userInfo">
                                    <router-link :to="{name: 'dashboard'}" class="dropdown-item px-3 py-2" @click="collapse">
                                        Dashboard
                                    </router-link>
                                </li>
                                <li v-if="userInfo">
                                    <router-link :to="{name: 'productReview'}" class="dropdown-item px-3 py-2" @click="collapse">
                                        Product Review
                                    </router-link>
                                </li>
                                <li v-if="userInfo">
                                    <router-link :to="{name: 'settings'}" class="dropdown-item px-3 py-2" @click="collapse">
                                        Settings
                                    </router-link>
                                </li>
                                <li v-if="userInfo">
                                    <button type="button" class="dropdown-item px-3 py-2" @click="collapse">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <!-- right sidebar as off canvas -->
    <div class="offcanvas offcanvas-end p-3 cursor-content-menu" tabindex="-1" id="offcanvasExample"
         aria-labelledby="offcanvasExampleLabel">
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
                        <div class="fw-semibold">
                            {{ cartItem.name }} (1Kg)
                        </div>
                        <div class="text-secondary d-flex justify-content-between font-14 my-2">
                            <span>
                                Price:
                                ${{ cartItem.price }}
                            </span>
                            <span>
                                Total:
                                ${{ cartItem.price * cartItem.quantity }}
                            </span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center border rounded-3 wpx-170">
                                <button class="btn border-0" type="button" @click="decrementQuantity(cartItem)">
                                    <i class="bi bi-dash"></i>
                                </button>
                                <input type="text" disabled class="form-control cursor-content-menu text-center border-0 bg-transparent mx-2" v-model="cartItem.quantity" min="1" max="5"/>
                                <button class="btn border-0" type="button" @click="incrementQuantity(cartItem)">
                                    <i class="bi bi-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- cart details or checkout -->
            <div class="px-3 mt-3" v-if="products.length !== 0">
                <div class="row">
                    <div class="col-6">
                        <button type="button" class="btn btn-theme w-100" data-bs-dismiss="offcanvas" @click="goCartDetails">
                            Cart Details
                        </button>
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-outline-theme w-100" data-bs-dismiss="offcanvas" @click="getCheckout">
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

        products: function () {
            return store.state.products
        },

    },

    data() {

        return {
            app_name: window.core.APP_NAME,
            userInfo: true,
            cartItem: [],
            navbarToggle: {
                'data-bs-toggle' :  'collapse',
                'data-bs-target' :  '#navbarSupportedContent',
                'aria-controls'  :  'navbarSupportedContent',
                'aria-expanded'  :  'false',
                'aria-label'     :  'Toggle navigation',
            },
        }

    },

    mounted() {

        this.getCartItems();

    },

    methods: {

        /* Function to get cart item */
        getCartItems() {
            store.dispatch('getCartItems')
        },

        /* Function to decrease quantity of product */
        decrementQuantity(cartItem) {
            if (cartItem.quantity > 1) {
                cartItem.quantity--;
                this.subTotal -= cartItem.price
                store.dispatch('decrementCartItem', cartItem)
            }
        },

        /* Function to increase quantity of product */
        incrementQuantity(cartItem) {
            if (cartItem.quantity < 5) {
                cartItem.quantity++;
                this.subTotal += cartItem.price
                store.dispatch('addToCart', cartItem)
            }
        },

        /* Function to remove of product */
        removeFromCart(cartItem) {
            store.dispatch('removeFromCart', cartItem)
        },

        /* Function to redirect shop */
        goRoute() {
            this.windowContent();
            this.$router.push({name: 'shop'})
        },

        /* Function to go top of screen */
        windowContent() {
            window.scrollTo(0, 0);
        },

        /* Function to redirect cart */
        goCartDetails() {
            this.windowContent();
            this.$router.push({name: 'cart'});
        },

        /* Function to redirect checkout */
        getCheckout() {
            this.windowContent();
            this.$router.push({name: 'checkout'})
        },

        collapse() {
            if(window.innerWidth < 991){
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                } else {
                    navbarCollapse.classList.add('show');
                }
            }
        }

    }

}

</script>
