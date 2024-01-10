import {createRouter, createWebHistory} from "vue-router";

/*
|
|--------------------------------------------------------------------------
| Home Pages
|--------------------------------------------------------------------------
|
*/

import layout from "../layout/layout.vue";

import home from "../pages/home.vue";

import shop from "../pages/shop.vue";

import blog from "../pages/blog.vue";

import contact from "../pages/contact.vue";

import authLayout from "../pages/auth/layout/layout.vue";

import login from "../pages/auth/login.vue";

import register from "../pages/auth/register.vue";

import forget from "../pages/auth/forget.vue";

const TITLE = window.core.APP_NAME

const ROOT_URL = "/front";

const routes = [

    {

        path: ROOT_URL, name: 'layout', component: layout,

        children: [

            { path: ROOT_URL + '/home', name: 'home', component: home, meta: { title: TITLE + ' - home' } },
            { path: ROOT_URL + '/shop', name: 'shop', component: shop, meta: { title: TITLE + ' - shop' } },
            { path: ROOT_URL + '/blog', name: 'blog', component: blog, meta: { title: TITLE + ' - blog' } },
            { path: ROOT_URL + '/contact', name: 'contact', component: contact, meta: { title: TITLE + ' - contact' } },

            { path: ROOT_URL + '/auth', name: 'authLayout', component: authLayout,
                children: [
                    { path: ROOT_URL + '/login', name: 'login', component: login, meta: { title: TITLE + ' - login' } },
                    { path: ROOT_URL + '/register', name: 'register', component: register, meta: { title: TITLE + ' - register' } },
                    { path: ROOT_URL + '/forget', name: 'forget', component: forget, meta: { title: TITLE + ' - forget' } },
                ]
            }

        ]

    },

];

const router = createRouter({

    history: createWebHistory(),

    routes

})

export default router;
