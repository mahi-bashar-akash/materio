import {createRouter, createWebHistory} from "vue-router";

/*
|
|--------------------------------------------------------------------------
| Admin Pages
|--------------------------------------------------------------------------
|
*/

import authLayout from "../auth/layout/layout.vue";

import login from "../auth/login.vue";

import register from "../auth/register.vue";

import forget from "../auth/forget.vue";

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

const TITLE = window.core.APP_NAME

const ROOT_URL = "/admin";

const AUTH_ROOT_URL = "/admin/auth";

const routes = [

    {

        path: AUTH_ROOT_URL, name: 'authLayout', component: authLayout,

        children: [

            { path: AUTH_ROOT_URL + '/login', name: 'login', component: login, meta: { title: TITLE + ' - login' } },

            { path: AUTH_ROOT_URL + '/register', name: 'register', component: register, meta: { title: TITLE + ' - registration' } },

            { path: AUTH_ROOT_URL + '/forget', name: 'forget', component: forget, meta: { title: TITLE + ' - forget' } },

        ]

    },

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

        ]

    },

];

const router = createRouter({

    history: createWebHistory(),

    routes

})

export default router;
