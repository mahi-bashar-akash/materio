import {createRouter, createWebHistory} from "vue-router";

/*
|
|--------------------------------------------------------------------------
| Admin Pages
|--------------------------------------------------------------------------
|
*/

import layout from "../layout/layout.vue";

import login from "../pages/login.vue";

import register from "../pages/register.vue";

import forget from "../pages/forget.vue";

const TITLE = window.core.APP_NAME

const AUTH_ROOT_URL = "/auth";

const routes = [

    {

        path: AUTH_ROOT_URL, name: 'layout', component: layout,

        children: [

            { path: AUTH_ROOT_URL + '/login', name: 'login', component: login, meta: { title: TITLE + ' - login' } },

            { path: AUTH_ROOT_URL + '/register', name: 'register', component: register, meta: { title: TITLE + ' - registration' } },

            { path: AUTH_ROOT_URL + '/forget', name: 'forget', component: forget, meta: { title: TITLE + ' - forget' } },

        ]

    },

];

const router = createRouter({

    history: createWebHistory(),

    routes

})

export default router;
