import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import eslint from "vite-plugin-eslint";
import basicSsl from "@vitejs/plugin-basic-ssl";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // eslint(),
    react(),
    tsconfigPaths(),
    basicSsl(),
    checker({ typescript: true }),
  ],
  server: {
    port: 3000,
    host: "localhost",
    https: true,
  },
});
