import { defineConfig } from 'vite'
import litcss from 'vite-plugin-lit-css';
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    litcss({ include: '**/*.css' }),
    tailwindcss(),
  ],
})