import { fileURLToPath, URL } from "node:url";
import type { UserConfig } from "vite";

// Plugins
import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";

export default {
  define: {
    __DATABASE_URL__: JSON.stringify(process.env.DATABASE_URL),
  },
  resolve: {
    alias: {
      "@/": fileURLToPath(new URL("./app/", import.meta.url)),
    },
  },
  plugins: [cloudflare({ viteEnvironment: { name: "ssr" } }), reactRouter()],
} satisfies UserConfig;
