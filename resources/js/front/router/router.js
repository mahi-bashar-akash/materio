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

import contact from "../pages/contact.vue";

import shop from "../pages/shop.vue";

import productDetails from "../pages/product-details.vue";

import blog from "../pages/blog.vue";

import cart from "../pages/cart.vue";

import profileLayout from "../pages/profile/layout/layout.vue";

import dashboard from "../pages/profile/dashboard.vue";

import productReview from "../pages/profile/product-review.vue";

import settings from "../pages/profile/settings.vue";

const TITLE = window.core.APP_NAME

const ROOT_URL = "/front";

const routes = [

    {

        path: ROOT_URL, name: 'layout', component: layout,

        children: [

            { path: ROOT_URL + '/home', name: 'home', component: home, meta: { title: TITLE + ' - home' } },

            { path: ROOT_URL + '/contact', name: 'contact', component: contact, meta: { title: TITLE + ' - contact' } },

            { path: ROOT_URL + '/shop', name: 'shop', component: shop, meta: { title: TITLE + ' - shop' } },

            { path: ROOT_URL + '/product-details', name: 'productDetails', component: productDetails, meta: { title: TITLE + ' - product details' } },

            { path: ROOT_URL + '/blog', name: 'blog', component: blog, meta: { title: TITLE + ' - blog' } },

            { path: ROOT_URL + '/cart', name: 'cart', component: cart, meta: { title: TITLE + ' - cart' } },

            { path: ROOT_URL, name: 'profileLayout', component: profileLayout,

                children: [

                    { path: ROOT_URL + '/profile/dashboard', name: 'dashboard', component: dashboard, meta: { title: TITLE + ' - dashboard ' } },

                    { path: ROOT_URL + '/profile/product-review', name: 'productReview', component: productReview, meta: { title: TITLE + ' - product review ' } },

                    { path: ROOT_URL + '/profile/settings', name: 'settings', component: settings, meta: { title: TITLE + ' - settings ' } },

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
