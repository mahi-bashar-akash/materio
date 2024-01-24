<template>

    <global/>

    <!-- header -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container p-3">
            <router-link :to="{name: 'home'}" class="navbar-brand">
                {{app_name}}
            </router-link>
            <button class="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{name: 'shop'}" class="nav-link">
                            Shop
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'contact'}" class="nav-link">
                            Contact
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'blog'}" class="nav-link">
                            Blog
                        </router-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            Cart
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/auth/login" class="nav-link">
                            Become a seller
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mahi Bashar Akash
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                            <li>
                                <router-link :to="{name: 'dashboard'}" class="dropdown-item px-3 py-2">
                                    Dashboard
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'settings'}" class="dropdown-item px-3 py-2">
                                    Settings
                                </router-link>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item px-3 py-2">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- right sidebar as offcanvasexample -->
    <div class="offcanvas offcanvas-end p-3 cursor-content-menu" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Cart</h5>
            <button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

            <!-- no data text -->
            <div class="d-flex justify-content-center align-items-center flex-column h-100">
                <i class="bi bi-bag fs-1 mb-3 d-block"></i>
                <small class="mb-3 fw-semibold">
                    No product add in your cart
                </small>
                <button type="button" class="btn btn-outline-theme d-flex justify-content-center align-items-center" data-bs-dismiss="offcanvas" @click="goRoute">
                    Continue Shopping
                </button>
            </div>

        </div>
    </div>

    <!-- router content view -->
    <div class="w-100 py-4" :style="{ background: 'url(' + imageUrl + ')' }">
        <div class="container">
            <router-view/>
        </div>
    </div>

    <!-- footer -->
    <div class="w-100 footer bg-light">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3">
                <div class="p-4">
                    <div class="h5 fw-semibold mb-4">
                        ABOUT STORE
                    </div>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        About Us
                    </a>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        Contact Us
                    </a>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        FAQs
                    </a>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        Our policies
                    </a>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        Work with us
                    </a>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        Offices
                    </a>
                </div>
                <div class="p-4">
                    <div class="h5 fw-semibold mb-4">
                        TOP CATEGORIES
                    </div>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        Fruit Products
                    </a>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        Fresh Meats
                    </a>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        Ocean Foods
                    </a>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        Feature Product
                    </a>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        New products
                    </a>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        Sale off
                    </a>
                </div>
                <div class="p-4">
                    <div class="h5 fw-semibold mb-4">
                        OUR STORE
                    </div>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        New York
                    </a>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        Londona SF
                    </a>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        Cockfosters BP
                    </a>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        Los Angeles
                    </a>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        Chicago
                    </a>
                    <a href="javascript:void(0)" class="nav-link mb-2">
                        Las Vegas
                    </a>
                </div>
            </div>
            <hr>
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
                <div class="p-3">
                    Copyright © 2025 <a href="javascript:void(0)" class="text-theme text-decoration-none"> Materio </a> all rights reserved.
                </div>
                <div class="p-3 d-flex justify-content-start flex-wrap">
                    <a href="javascript:void(0)" class="text-dark text-decoration-none me-3">
                        Site Map
                    </a>
                    <a href="javascript:void(0)" class="text-dark text-decoration-none me-3">
                        Careers
                    </a>
                    <a href="javascript:void(0)" class="text-dark text-decoration-none me-3">
                        Privacy & Policy
                    </a>
                    <a href="javascript:void(0)" class="text-dark text-decoration-none">
                        Terms of Use
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import global from "../../global/global.vue";

export default {

    components: {
        global
    },

    data(){

        return{
            app_name: window.core.APP_NAME,
            imageUrl: '/images/dots.png',
        }

    },

    mounted() {  },

    methods: {

        goRoute(){
            this.$router.push( {name: 'shop'} )
        }

    }

}

</script>
