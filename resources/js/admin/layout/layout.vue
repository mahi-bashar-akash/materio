<template>

    <global/>

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

import global from "../../global/global.vue";

export default {

    components: {
        global
    },

    data(){

        return{
            imageUrl: '/images/dots.png',
            app_name: window.core.APP_NAME,
            sidebarActive: false,
        }

    },

    mounted() {  },

    methods: {

        btnController(){
            this.sidebarActive = !this.sidebarActive;
        },

        remove(){
            this.sidebarActive = false;
        },

    }

}

</script>
