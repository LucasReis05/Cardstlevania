import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig(({ command }) => ({
  // Em desenvolvimento usa raiz local; no build usa a subpasta do repositório no GitHub Pages.
  base: `/Cardstlevania/`,
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        partida: resolve(__dirname, 'partida.html'),
        tutorial: resolve(__dirname, 'tutorial.html')
      }
    }
  }
}))