<template>

    <global/>

    <!-- user wrapper content -->
    <div class="user-wrapper" :style="{ background: 'url(' + imageUrl + ')' }">

        <!-- user sidebar content -->
        <div class="user-sidebar" :class="{'active': sidebarActive}">
            <div class="user-sidebar-header">
                <router-link :to="{name: 'dashboard'}" class="user-sidebar-title">
                    {{app_name}}
                </router-link>
                <button type="button" class="btn btn-controller" @click="remove">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
            <div class="user-sidebar-body">
                <router-link :to="{name: 'dashboard'}" class="user-sidebar-link" @click="remove">
                    <i class="bi bi-circle me-1"></i> CRM - Dashboard
                </router-link>
                <router-link :to="{name: 'chat'}" class="user-sidebar-link" @click="remove">
                    <i class="bi bi-circle me-1"></i> Chat
                </router-link>
                <router-link :to="{name: 'calendar'}" class="user-sidebar-link" @click="remove">
                    <i class="bi bi-circle me-1"></i> Calendar
                </router-link>
                <router-link :to="{name: 'email'}" class="user-sidebar-link" @click="remove">
                    <i class="bi bi-circle me-1"></i> Email
                </router-link>
                <div class="d-flex justify-content-center">
                    <hr class="col-6">
                </div>
                <router-link :to="{name: 'slider'}" class="user-sidebar-link" @click="remove">
                    <i class="bi bi-sliders me-1"></i> Sliders
                </router-link>
                <router-link :to="{name: 'category'}" class="user-sidebar-link" @click="remove">
                    <i class="bi bi-link-45deg me-1"></i> Categories
                </router-link>
                <router-link :to="{name: 'product'}" class="user-sidebar-link" @click="remove">
                    <i class="bi bi-bag me-1"></i> Products
                </router-link>
                <router-link :to="{name: 'packages'}" class="user-sidebar-link" @click="remove">
                    <i class="bi bi-box2-heart me-1"></i> Packages
                </router-link>
                <div class="d-flex justify-content-center">
                    <hr class="col-6">
                </div>
                <router-link :to="{name: 'order'}" class="user-sidebar-link" @click="remove">
                    <i class="bi bi-cart me-1"></i> Orders
                </router-link>
            </div>
        </div>

        <!-- user content -->
        <div class="user-content">

            <!-- user content header -->
            <div class="user-content-header">
                <button type="button" class="btn btn-controller" @click="btnController()">
                    <i class="bi bi-justify-left"></i>
                </button>
                <div class="dropdown">
                    <button type="button" class="btn btn-user" data-bs-toggle="dropdown" aria-expanded="false">
                        <img :src="`/images/avatar.png`" class="rounded-circle overflow-hidden user-avatar" alt="user avatar">
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                        <li>
                            <router-link :to="{name: 'profile'}" class="dropdown-item px-3 py-2">
                                <i class="bi bi-person me-2"></i> Profile
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

            <!-- user content body -->
            <div class="user-content-body">
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
