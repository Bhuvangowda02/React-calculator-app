import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/React-calculator-app/',
  plugins: [react()],
})
