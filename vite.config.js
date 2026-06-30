import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/https://github.com/rraju606089/todo-app-react.git/",
  plugins: [react()],
})
