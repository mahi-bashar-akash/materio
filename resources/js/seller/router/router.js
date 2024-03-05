import {createRouter, createWebHistory} from "vue-router";

/*
|--------------------------------------------------------------------------
|---- Seller Auth Pages -------------------------------------------------
|--------------------------------------------------------------------------
*/

import authLayout from "../auth/layout/layout.vue";
import login from "../auth/pages/login.vue";
import register from "../auth/pages/register.vue";
import forget from "../auth/pages/forget.vue";

/*
|--------------------------------------------------------------------------
|---- Seller Pages -------------------------------------------------
|--------------------------------------------------------------------------
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
const root_url = "/seller";
const auth_root_url = "/seller/auth";
const routes = [

    /* Seller auth panel */
    {
        path: auth_root_url, name: 'authLayout', component: authLayout,
        children: [
            { path: auth_root_url + '/login', name: 'login', component: login, meta: { title: TITLE + ' - login' } },
            { path: auth_root_url + '/register', name: 'register', component: register, meta: { title: TITLE + ' - register' } },
            { path: auth_root_url + '/forget', name: 'forget', component: forget, meta: { title: TITLE + ' - forget' } },
        ]
    },

    /* Seller panel */
    {
        path: root_url, name: 'layout', component: layout,
        children: [
            { path: root_url + '/dashboard', name: 'dashboard', component: dashboard, meta: { title: TITLE + ' - dashboard' } },
            { path: root_url + '/chat', name: 'chat', component: chat, meta: { title: TITLE + ' - chat' } },
            { path: root_url + '/calendar', name: 'calendar', component: calendar, meta: { title: TITLE + ' - calendar' } },
            { path: root_url + '/email', name: 'email', component: email, meta: { title: TITLE + ' - email' } },
            { path: root_url + '/profile', name: 'profile', component: profile, meta: { title: TITLE + ' - profile' } },
            { path: root_url + '/slider', name: 'slider', component: slider, meta: { title: TITLE + ' - slider' } },
            { path: root_url + '/category', name: 'category', component: category, meta: { title: TITLE + ' - category' } },
            { path: root_url + '/product', name: 'product', component: product, meta: { title: TITLE + ' - product' } },
            { path: root_url + '/packages', name: 'packages', component: packages, meta: { title: TITLE + ' - packages' } },
            { path: root_url + '/order', name: 'order', component: order, meta: { title: TITLE + ' - order' } },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
