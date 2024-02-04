import {createRouter, createWebHistory} from "vue-router";

/*
|
|--------------------------------------------------------------------------
| Delivery Pages
|--------------------------------------------------------------------------
|
*/

import layout from "../layout/layout.vue";

import dashboard from "../pages/dashboard.vue";

import order from "../pages/order.vue";

import notification from "../pages/notification.vue";

import profile from "../pages/profile.vue";

const TITLE = window.core.APP_NAME

const ROOT_URL = "/delivery";

const routes = [

    {

        path: ROOT_URL, name: 'layout', component: layout,

        children: [

            { path: ROOT_URL + '/dashboard', name: 'dashboard', component: dashboard, meta: { title: TITLE + ' - dashboard' } },

            { path: ROOT_URL + '/order', name: 'order', component: order, meta: { title: TITLE + ' - order' } },

            { path: ROOT_URL + '/notification', name: 'notification', component: notification, meta: { title: TITLE + ' - notification' } },

            { path: ROOT_URL + '/profile', name: 'profile', component: profile, meta: { title: TITLE + ' - profile' } },

        ]

    },

];

const router = createRouter({

    history: createWebHistory(),

    routes

})

export default router;
