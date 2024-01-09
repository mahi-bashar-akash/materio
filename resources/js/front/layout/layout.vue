<template>

    <!-- preloader content -->
    <div id="preloader">
        <div class="position-relative">
            <div class="spinner-border text-secondary" role="status" style="width: 150px; height: 150px;">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="position-absolute top-50 start-50 translate-middle">
                <img :src="`/images/svg/logo.svg`" class="img-fluid" style="width: 50px; height: 50px;" alt="logo">
            </div>
        </div>
    </div>

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
                    <li class="nav-item">
                        <router-link :to="{name: 'blog'}" class="nav-link">
                            Blog
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'contact'}" class="nav-link">
                            Contact
                        </router-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">
                            Cart
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">
                            Login
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mahi Bashar Akash
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                            <li>
                                <a class="dropdown-item px-3 py-2" href="javascript:void(0)">
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item px-3 py-2" href="javascript:void(0)">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item px-3 py-2" href="javascript:void(0)">
                                    Delete Account
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item px-3 py-2" href="javascript:void(0)">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="w-100 py-4">
        <div class="container">
            <router-view/>
        </div>
    </div>

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
                    Copyright © 2020 <a href="javascript:void(0)" class="text-theme text-decoration-none"> Materio </a> all rights reserved.
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

import tinyColor from "tinycolor2";

export default {

    data(){

        return{
            app_name: window.core.APP_NAME
        }

    },

    mounted() {

        setTimeout(() =>{
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                document.getElementById('front').removeChild(preloader)
            },1000)
        },3000);

        const savedColor = localStorage.getItem('themeColor');
        if (savedColor) {
            this.selectedColor = savedColor;
            this.updateThemeColor(savedColor);
        }

    },

    methods: {

        updateThemeColor(color) {
            localStorage.setItem('themeColor', color);
            document.documentElement.style.setProperty('--theme', color);
            const darkenedColor = this.darken(color, 10);
            document.documentElement.style.setProperty('--theme-dark', darkenedColor);
            const lightenColor = this.lighten(color, 30);
            document.documentElement.style.setProperty('--theme-light', lightenColor);
            this.colorWrapperActive = false;
        },

        darken(color, amount) {
            const darkColor = tinyColor(color).darken(amount).toString();
            return darkColor;
        },

        lighten(color, amount) {
            const lightColor = tinyColor(color).lighten(amount).toString();
            return lightColor;
        },

    }

}

</script>
