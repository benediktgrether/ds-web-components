import { defineConfig } from 'vite';
import litcss from 'vite-plugin-lit-css';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
    resolve: {
        alias: {
            '@css': new URL('./src/css', import.meta.url).pathname, // Adjusted for ESM compatibility
        },
    },
    plugins: [litcss({ include: '**/*.css' }), tailwindcss()],
});
