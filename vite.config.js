import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vuePlugin from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vuePlugin(),
        laravel({
            input: [

                // stylesheet
                'resources/scss/stylesheet.scss',

                // front
                'resources/js/front/app.js',

                // authentication
                'resources/js/auth/app.js',

                // admin
                'resources/js/admin/app.js',

                // seller
                'resources/js/seller/app.js',

                // delivery
                'resources/js/delivery/app.js',

            ],
            refresh: true,
        }),
    ],
});
