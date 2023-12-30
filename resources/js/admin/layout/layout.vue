<template>

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

    <div class="admin-wrapper" style="background: url('/images/dots.png')">
        <div class="admin-sidebar" :class="{'active': sidebarActive}">
            <div class="admin-sidebar-header">
                <router-link :to="{name: 'dashboard'}" class="admin-sidebar-title">
                    MahiBro
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
                <router-link :to="{name: 'rolePermission'}" class="admin-sidebar-link" @click="remove">
                    <i class="bi bi-circle me-1"></i> Roles & Permissions
                </router-link>
                <router-link :to="{name: 'pages'}" class="admin-sidebar-link" @click="remove">
                    <i class="bi bi-circle me-1"></i> Pages
                </router-link>
            </div>
        </div>
        <div class="admin-content">
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
                            <button type="button" class="dropdown-item px-3 py-2" @click="pushLink">
                                <i class="bi bi-box-arrow-right me-2"></i> Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="admin-content-body">
                <router-view/>
            </div>
        </div>
    </div>

</template>

<script>

import route from "../router/router";

export default {

    data(){

        return{
            sidebarActive: false
        }

    },

    mounted() {

        setTimeout(() =>{
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                document.getElementById('admin').removeChild(preloader)
            },1000)
        },3000);

    },

    methods: {

        btnController(){
            this.sidebarActive = !this.sidebarActive;
        },

        remove(){
            this.sidebarActive = false;
        },

        pushLink(){
            route.push( { name: 'login' } )
        }

    }

}

</script>
