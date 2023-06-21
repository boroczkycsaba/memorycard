import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import UnoCSS from 'unocss/vite'

export default defineConfig({
  base: "/memorycard/",
  plugins: [
    UnoCSS({
      shortcuts:[  
        {h1:'backdrop-blur text-center text-10 font-800 c-blue-600 p-2'},     
        
      ],    
    }),
    react()],
})
