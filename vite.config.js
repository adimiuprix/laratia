import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
            fonts: [
                bunny('Instrument Sans', {
                    weights: [400, 500, 600],
                }),
            ],
        }),
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': new URL('resources/js', import.meta.url).pathname,
        },
    },
    server: {
        host: 'casbref.fun',
        port: 5173,
        https: {
            key: fs.readFileSync('D:/laragon/etc/ssl/laragon.key'),
            cert: fs.readFileSync('D:/laragon/etc/ssl/laragon.crt'),
        },
        cors: {
            origin: [
                'https://casbref.fun',
                'http://casbref.fun',
            ],
        },
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
