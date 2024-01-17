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

    <!--  color select content  -->
    <div class="color-wrapper" :class="{'active': colorWrapperActive}">
        <div class="color-controller">
            <button type="button" class="btn btn-gear" @click="colorController">
                <i class="bi bi-gear-fill"></i>
            </button>
            <div class="fw-semibold ms-4">Theme Colors</div>
        </div>
        <div class="color-selector">
            <button v-for="color in themeColors" :key="color" type="button" class="btn btn-circle-code p-1" :style="{ backgroundColor: color }" @click="updateThemeColor(color);"/>
        </div>
        <div class="form-control-color-selector">
            <div class="fw-semibold">Customize Theme color</div>
            <input type="color" class="form-control form-control-color" v-model="selectedColor" @input="handleColorChange">
        </div>
    </div>

    <!-- admin wrapper content -->
    <div class="admin-wrapper" :style="{ background: 'url(' + imageUrl + ')' }">

        <!-- admin sidebar content -->
        <div class="admin-sidebar" :class="{'active': sidebarActive}">
            <div class="admin-sidebar-header">
                <router-link :to="{name: 'dashboard'}" class="admin-sidebar-title">
                    {{app_name}}
                </router-link>
                <button type="button" class="btn btn-controller" @click="remove">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
            <div class="admin-sidebar-body">
                <router-link :to="{name: 'dashboard'}" class="admin-sidebar-link" @click="remove">
                    <i class="bi bi-circle me-1"></i> CRM - Dashboard
                </router-link>
                <router-link :to="{name: 'email'}" class="admin-sidebar-link" @click="remove">
                    <i class="bi bi-circle me-1"></i> Email
                </router-link>
                <router-link :to="{name: 'chat'}" class="admin-sidebar-link" @click="remove">
                    <i class="bi bi-circle me-1"></i> Chat
                </router-link>
                <router-link :to="{name: 'calendar'}" class="admin-sidebar-link" @click="remove">
                    <i class="bi bi-circle me-1"></i> Calendar
                </router-link>
                <router-link :to="{name: 'invoice'}" class="admin-sidebar-link" :class="{ 'router-link-active': $route.name === 'manageInvoice' }" @click="remove">
                    <i class="bi bi-circle me-1"></i> Invoice
                </router-link>
                <router-link :to="{name: 'user'}" class="admin-sidebar-link" @click="remove">
                    <i class="bi bi-circle me-1"></i> User
                </router-link>
                <router-link :to="{name: 'pricing'}" class="admin-sidebar-link" @click="remove">
                    <i class="bi bi-circle me-1"></i> Pricing
                </router-link>
                <div class="d-flex justify-content-center">
                    <hr class="col-6">
                </div>
                <router-link :to="{name: 'slider'}" class="admin-sidebar-link" @click="remove">
                    <i class="bi bi-sliders me-1"></i> Sliders
                </router-link>
                <router-link :to="{name: 'category'}" class="admin-sidebar-link" @click="remove">
                    <i class="bi bi-link-45deg me-1"></i> Categories
                </router-link>
                <router-link :to="{name: 'product'}" class="admin-sidebar-link" @click="remove">
                    <i class="bi bi-bag me-1"></i> Products
                </router-link>
                <div class="d-flex justify-content-center">
                    <hr class="col-6">
                </div>
                <router-link :to="{name: 'customer'}" class="admin-sidebar-link" @click="remove">
                    <i class="bi bi-people me-1"></i> Customers
                </router-link>
                <router-link :to="{name: 'order'}" class="admin-sidebar-link" @click="remove">
                    <i class="bi bi-cart me-1"></i> Orders
                </router-link>
            </div>
        </div>

        <!-- admin content -->
        <div class="admin-content">

            <!-- admin content header -->
            <div class="admin-content-header">
                <button type="button" class="btn btn-controller" @click="btnController()">
                    <i class="bi bi-justify-left"></i>
                </button>
                <div class="dropdown">
                    <button type="button" class="btn btn-user" data-bs-toggle="dropdown" aria-expanded="false">
                        <img :src="`/images/avatar.png`" class="rounded-circle overflow-hidden admin-avatar" alt="admin avatar">
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                        <li>
                            <router-link :to="{name: 'profile'}" class="dropdown-item px-3 py-2">
                                <i class="bi bi-person me-2"></i> Profile
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'settings'}" class="dropdown-item px-3 py-2">
                                <i class="bi bi-gear me-2"></i> Settings
                            </router-link>
                        </li>
                        <li>
                            <a href="/auth/login" class="dropdown-item px-3 py-2">
                                <i class="bi bi-box-arrow-right me-2"></i> Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- admin content body -->
            <div class="admin-content-body">
                <router-view/>
            </div>

        </div>
    </div>

</template>

<script>

import route from "../router/router";
import tinyColor from 'tinycolor2';

export default {

    data(){

        return{
            imageUrl: '/images/dots.png',
            app_name: window.core.APP_NAME,
            sidebarActive: false,
            colorWrapperActive: false,
            themeColors: ["#8C57FF", "#0D9394", "#8A8D93", "#FF4C51", "#16B1FF"],
            selectedColor: null,
        }

    },

    mounted() {

        setTimeout(() =>{
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                document.getElementById('admin').removeChild(preloader)
            },1000)
        },3000);

        const savedColor = localStorage.getItem('themeColor');
        if (savedColor) {
            this.selectedColor = savedColor;
            this.updateThemeColor(savedColor);
        }

    },

    methods: {

        btnController(){
            this.sidebarActive = !this.sidebarActive;
        },

        remove(){
            this.sidebarActive = false;
        },

        colorController(){
            this.colorWrapperActive = !this.colorWrapperActive
        },

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

        handleColorChange() {
            this.updateThemeColor(this.selectedColor);
        },

    }

}

</script>
