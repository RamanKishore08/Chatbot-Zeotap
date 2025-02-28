import { defineConfig } from 'vite';


export default defineConfig({
  server: {
    proxy: {
      "/chat": {
        target: "https://zeotapchatbot-2.onrender.com",  //Replace your local API  
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
