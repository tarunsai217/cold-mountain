import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Output directory — must match "outputDirectory" in vercel.json
    outDir: "dist",

    // Raise chunk warning limit slightly for large image imports
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        // Split vendor code into a separate chunk for better caching
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },

  // Allows vite dev server to serve on the local network (useful for mobile testing)
  server: {
    host: true,
  },
});
