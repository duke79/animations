import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "./animations"
// })

// // load env variables to get base url
// process.env = Object.assign(process.env, loadEnv('production', process.cwd(), ''));

export default defineConfig({
  // ...
  experimental: {
    renderBuiltUrl(filename) {
        // here we set the base url. You might have to change this for react:
        return  '/animations/' + filename;
    }
  }
})
