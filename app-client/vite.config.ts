import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    //this is added because on docker container works
    host: true,
    hmr: {
      port: 3010,
    },
  },
  plugins: [react()],
});
