// vite.config.ts
import { defineConfig } from "file:///E:/Jeeny/code/kits/jeeny-react/node_modules/vite/dist/node/index.js";
import react from "file:///E:/Jeeny/code/kits/jeeny-react/node_modules/@vitejs/plugin-react/dist/index.mjs";
import basicSsl from "file:///E:/Jeeny/code/kits/jeeny-react/node_modules/@vitejs/plugin-basic-ssl/dist/index.mjs";
import tsconfigPaths from "file:///E:/Jeeny/code/kits/jeeny-react/node_modules/vite-tsconfig-paths/dist/index.mjs";
import checker from "file:///E:/Jeeny/code/kits/jeeny-react/node_modules/vite-plugin-checker/dist/esm/main.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    basicSsl(),
    checker({ typescript: true })
  ],
  server: {
    port: 3e3,
    host: "localhost",
    https: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxKZWVueVxcXFxjb2RlXFxcXGtpdHNcXFxcamVlbnktcmVhY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXEplZW55XFxcXGNvZGVcXFxca2l0c1xcXFxqZWVueS1yZWFjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovSmVlbnkvY29kZS9raXRzL2plZW55LXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbi8vIGltcG9ydCBlc2xpbnQgZnJvbSBcInZpdGUtcGx1Z2luLWVzbGludFwiO1xuaW1wb3J0IGJhc2ljU3NsIGZyb20gXCJAdml0ZWpzL3BsdWdpbi1iYXNpYy1zc2xcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5pbXBvcnQgY2hlY2tlciBmcm9tIFwidml0ZS1wbHVnaW4tY2hlY2tlclwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIC8vIGVzbGludCgpLFxuICAgIHJlYWN0KCksXG4gICAgdHNjb25maWdQYXRocygpLFxuICAgIGJhc2ljU3NsKCksXG4gICAgY2hlY2tlcih7IHR5cGVzY3JpcHQ6IHRydWUgfSksXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICBodHRwczogdHJ1ZSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUixTQUFTLG9CQUFvQjtBQUNuVCxPQUFPLFdBQVc7QUFFbEIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sYUFBYTtBQUdwQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFFUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxTQUFTO0FBQUEsSUFDVCxRQUFRLEVBQUUsWUFBWSxLQUFLLENBQUM7QUFBQSxFQUM5QjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLEVBQ1Q7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
