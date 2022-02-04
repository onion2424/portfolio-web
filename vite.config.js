import { defineConfig, resolveConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// https://vitejs.dev/config/
export default defineConfig({
  //root: './src',
  plugins: [svelte()],
  build:{
    rollupOptions: {
      input:{
        main: path.resolve(dirname, 'index.html')
      }
    }
  }
  
})
