import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // base: "/gavriel",// this needs to be turned on for production
  plugins: [react()],
  server: {
  },
});
