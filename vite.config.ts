import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Vite 配置：启用 React 支持
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});

