import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    envCompatible({
      productionPrefix: "REACT_APP",
      developmentPrefix: "REACT_APP",
      allowList: ["NODE_ENV", "VITE_APP_NAME"], // Add any additional variables you want to whitelist
    }),
  ],

});
