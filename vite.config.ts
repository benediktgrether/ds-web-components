import { defineConfig } from 'vite';
import litcss from 'vite-plugin-lit-css';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
    resolve: {
        alias: {
            '@css': new URL('src/css', import.meta.url).pathname,
            '@components': new URL('src/components', import.meta.url).pathname,
            '@layout': new URL('src/layout', import.meta.url).pathname,
        },
    },
    build: {
        rollupOptions: {
            onwarn(warning, warn) {
                // Ignore sourcemap warnings
                if (warning.code === 'SOURCEMAP_BROKEN') {
                    return;
                }

                warn(warning);
            },
        },
    },
    plugins: [litcss({ include: '**/*.css' }), tailwindcss()],
});
