import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vuePlugin from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vuePlugin(),
        laravel({
            input: [
                'resources/scss/basic.scss',
                'resources/scss/admin.scss', 'resources/js/admin/app.js',
                'resources/scss/front.scss', 'resources/js/front/app.js'
            ],
            refresh: true,
        }),
    ],
});
