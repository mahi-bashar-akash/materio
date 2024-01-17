import {createRouter, createWebHistory} from "vue-router";

/*
|
|--------------------------------------------------------------------------
| Admin Pages
|--------------------------------------------------------------------------
|
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

const TITLE = window.core.APP_NAME

const ROOT_URL = "/admin";

const routes = [

    {

        path: ROOT_URL, name: 'layout', component: layout,

        children: [

            { path: ROOT_URL + '/dashboard', name: 'dashboard', component: dashboard, meta: { title: TITLE + ' - dashboard' } },

            { path: ROOT_URL + '/email', name: 'email', component: email, meta: { title: TITLE + ' - email' } },

            { path: ROOT_URL + '/chat', name: 'chat', component: chat, meta: { title: TITLE + ' - chat' } },

            { path: ROOT_URL + '/calendar', name: 'calendar', component: calendar, meta: { title: TITLE + ' - calendar' } },

            { path: ROOT_URL + '/invoice', name: 'invoice', component: invoice, meta: { title: TITLE + ' - invoice' } },

            { path: ROOT_URL + '/manage-invoice', name: 'manageInvoice', component: manageInvoice, meta: { title: TITLE + ' - manage invoice' } },

            { path: ROOT_URL + '/user', name: 'user', component: user, meta: { title: TITLE + ' - user' } },

            { path: ROOT_URL + '/pricing', name: 'pricing', component: pricing, meta: { title: TITLE + ' - pricing' } },

            { path: ROOT_URL + '/profile', name: 'profile', component: profile, meta: { title: TITLE + ' - profile' } },

            { path: ROOT_URL + '/settings', name: 'settings', component: settings, meta: { title: TITLE + ' - settings' } },

            { path: ROOT_URL + '/slider', name: 'slider', component: slider, meta: { title: TITLE + ' - slider' } },

            { path: ROOT_URL + '/category', name: 'category', component: category, meta: { title: TITLE + ' - category' } },

            { path: ROOT_URL + '/product', name: 'product', component: product, meta: { title: TITLE + ' - product' } },

            { path: ROOT_URL + '/customer', name: 'customer', component: customer, meta: { title: TITLE + ' - customer' } },

            { path: ROOT_URL + '/order', name: 'order', component: order, meta: { title: TITLE + ' - order' } },

        ]

    },

];

const router = createRouter({

    history: createWebHistory(),

    routes

})

export default router;
