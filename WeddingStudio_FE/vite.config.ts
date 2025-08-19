import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Đổi thành IP hoặc domain bạn muốn, ví dụ 'localhost'
    port: 5174, // Đổi port nếu cần
  },
});
