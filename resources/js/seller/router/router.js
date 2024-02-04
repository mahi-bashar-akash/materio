import {createRouter, createWebHistory} from "vue-router";

/*
|
|--------------------------------------------------------------------------
| Seller Pages
|--------------------------------------------------------------------------
|
*/

import layout from "../layout/layout.vue";

import dashboard from "../pages/dashboard.vue";

import chat from "../pages/chat.vue";

import calendar from "../pages/calendar.vue";

import email from "../pages/email.vue";

import profile from "../pages/profile.vue";

import slider from "../pages/slider.vue";

import category from "../pages/category.vue";

import product from "../pages/product.vue";

import packages from "../pages/package.vue";

import order from "../pages/order.vue";

const TITLE = window.core.APP_NAME

const ROOT_URL = "/seller";

const routes = [

    {

        path: ROOT_URL, name: 'layout', component: layout,

        children: [

            { path: ROOT_URL + '/dashboard', name: 'dashboard', component: dashboard, meta: { title: TITLE + ' - dashboard' } },

            { path: ROOT_URL + '/chat', name: 'chat', component: chat, meta: { title: TITLE + ' - chat' } },

            { path: ROOT_URL + '/calendar', name: 'calendar', component: calendar, meta: { title: TITLE + ' - calendar' } },

            { path: ROOT_URL + '/email', name: 'email', component: email, meta: { title: TITLE + ' - email' } },

            { path: ROOT_URL + '/profile', name: 'profile', component: profile, meta: { title: TITLE + ' - profile' } },

            { path: ROOT_URL + '/slider', name: 'slider', component: slider, meta: { title: TITLE + ' - slider' } },

            { path: ROOT_URL + '/category', name: 'category', component: category, meta: { title: TITLE + ' - category' } },

            { path: ROOT_URL + '/product', name: 'product', component: product, meta: { title: TITLE + ' - product' } },

            { path: ROOT_URL + '/packages', name: 'packages', component: packages, meta: { title: TITLE + ' - packages' } },

            { path: ROOT_URL + '/order', name: 'order', component: order, meta: { title: TITLE + ' - order' } },

        ]

    },

];

const router = createRouter({

    history: createWebHistory(),

    routes

})

export default router;
