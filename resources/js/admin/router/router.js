import {createRouter, createWebHistory} from "vue-router";

/*
|--------------------------------------------------------------------------
|---- Admin Auth Pages ----------------------------------------------------
|--------------------------------------------------------------------------
*/

import authLayout from "../auth/layout/layout.vue";
import login from "../auth/pages/login.vue";
import register from "../auth/pages/register.vue";
import forget from "../auth/pages/forget.vue";

/*
|--------------------------------------------------------------------------
|---- Admin Pages ---------------------------------------------------------
|--------------------------------------------------------------------------
*/

import layout from "../layout/layout.vue";
import dashboard from "../pages/dashboard.vue";
import email from "../pages/email.vue";
import chat from "../pages/chat.vue";
import calendar from "../pages/calendar.vue";
import invoice from "../pages/invoice.vue";
import manageInvoice from "../pages/manage-invoice.vue";
import user from "../pages/user.vue";
import pricing from "../pages/pricing.vue";
import profile from "../pages/profile.vue";
import settings from "../pages/settings.vue";
import slider from "../pages/slider.vue";
import category from "../pages/category.vue";
import product from "../pages/product.vue";
import customer from "../pages/customer.vue";
import order from "../pages/order.vue";

const title = window.core.APP_NAME
const root_url = "/admin";
const auth_root_url = "/admin/auth";
const routes = [

    /* Admin auth panel */
    {
        path: auth_root_url, name: 'authLayout', component: authLayout,
        children: [
            { path: auth_root_url + '/login', name: 'login', component: login, meta: { title: title + ' - login ' } },
            { path: auth_root_url + '/register', name: 'register', component: register, meta: { title: title + ' - register ' } },
            { path: auth_root_url + '/forget', name: 'forget', component: forget, meta: { title: title + ' - forget ' } },
        ]
    },

    /* Admin panel */
    {
        path: root_url, name: 'layout', component: layout,
        children: [
            { path: root_url + '/dashboard', name: 'dashboard', component: dashboard, meta: { title: title + ' - dashboard' } },
            { path: root_url + '/email', name: 'email', component: email, meta: { title: title + ' - email' } },
            { path: root_url + '/chat', name: 'chat', component: chat, meta: { title: title + ' - chat' } },
            { path: root_url + '/calendar', name: 'calendar', component: calendar, meta: { title: title + ' - calendar' } },
            { path: root_url + '/invoice', name: 'invoice', component: invoice, meta: { title: title + ' - invoice' } },
            { path: root_url + '/manage-invoice', name: 'manageInvoice', component: manageInvoice, meta: { title: title + ' - manage invoice' } },
            { path: root_url + '/user', name: 'user', component: user, meta: { title: title + ' - user' } },
            { path: root_url + '/pricing', name: 'pricing', component: pricing, meta: { title: title + ' - pricing' } },
            { path: root_url + '/profile', name: 'profile', component: profile, meta: { title: title + ' - profile' } },
            { path: root_url + '/settings', name: 'settings', component: settings, meta: { title: title + ' - settings' } },
            { path: root_url + '/slider', name: 'slider', component: slider, meta: { title: title + ' - slider' } },
            { path: root_url + '/category', name: 'category', component: category, meta: { title: title + ' - category' } },
            { path: root_url + '/product', name: 'product', component: product, meta: { title: title + ' - product' } },
            { path: root_url + '/customer', name: 'customer', component: customer, meta: { title: title + ' - customer' } },
            { path: root_url + '/order', name: 'order', component: order, meta: { title: title + ' - order' } },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
