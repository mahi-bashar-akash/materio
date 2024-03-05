import {createRouter, createWebHistory} from "vue-router";

/*
|--------------------------------------------------------------------------
|---- Delivery Auth Pages -------------------------------------------------
|--------------------------------------------------------------------------
*/

import authLayout from "../auth/layout/layout.vue";
import login from "../auth/pages/login.vue";
import register from "../auth/pages/register.vue";
import forget from "../auth/pages/forget.vue";

/*
|--------------------------------------------------------------------------
|---- Delivery Pages ------------------------------------------------------
|--------------------------------------------------------------------------
*/

import layout from "../layout/layout.vue";
import dashboard from "../pages/dashboard.vue";
import order from "../pages/order.vue";
import chat from "../pages/chat.vue";
import notification from "../pages/notification.vue";
import profile from "../pages/profile.vue";

const TITLE = window.core.APP_NAME
const root_url = "/delivery";
const auth_root_url = "/delivery/auth";
const routes = [

    /* Delivery auth panel */
    {
        path: auth_root_url, name: 'authLayout', component: authLayout,
        children: [
            { path: auth_root_url + '/login', name: 'login', component: login, meta: { title: TITLE + ' - login' } },
            { path: auth_root_url + '/register', name: 'register', component: register, meta: { title: TITLE + ' - register' } },
            { path: auth_root_url + '/forget', name: 'forget', component: forget, meta: { title: TITLE + ' - forget' } },
        ]
    },

    /* Delivery panel */
    {
        path: root_url, name: 'layout', component: layout,
        children: [
            { path: root_url + '/dashboard', name: 'dashboard', component: dashboard, meta: { title: TITLE + ' - dashboard' } },
            { path: root_url + '/chat', name: 'chat', component: chat, meta: { title: TITLE + ' - chat' } },
            { path: root_url + '/order', name: 'order', component: order, meta: { title: TITLE + ' - order' } },
            { path: root_url + '/notification', name: 'notification', component: notification, meta: { title: TITLE + ' - notification' } },
            { path: root_url + '/profile', name: 'profile', component: profile, meta: { title: TITLE + ' - profile' } },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
