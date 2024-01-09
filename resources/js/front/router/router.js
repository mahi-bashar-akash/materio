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

const TITLE = window.core.APP_NAME

const ROOT_URL = "/front";

const routes = [

    {

        path: ROOT_URL, name: 'layout', component: layout,

        children: [

            { path: ROOT_URL + '/home', name: 'home', component: home, meta: { title: TITLE + 'home' } },
            { path: ROOT_URL + '/shop', name: 'shop', component: shop, meta: { title: TITLE + 'shop' } },
            { path: ROOT_URL + '/blog', name: 'blog', component: blog, meta: { title: TITLE + 'blog' } },

        ]

    },

];

const router = createRouter({

    history: createWebHistory(),

    routes

})

export default router;
