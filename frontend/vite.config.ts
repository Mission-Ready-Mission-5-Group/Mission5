import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// const proxyTarget = process.env.PROXY_TARGET || "127.0.0.1";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: "0.0.0.0", // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000, // you can replace this port with any port
    // proxy: { "/api": "http://" + proxyTarget + ":3005" }
    proxy: {
      "/api": {
        target: "http://backend:3005",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
