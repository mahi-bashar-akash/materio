import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vuePlugin from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vuePlugin(),
        laravel({
            input: [
                'resources/scss/basic.scss',
                'resources/js/auth/app.js',
                'resources/js/admin/app.js',
                'resources/js/front/app.js',
                'resources/js/seller/app.js'
            ],
            refresh: true,
        }),
    ],
});
