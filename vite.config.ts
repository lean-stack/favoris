import type { UserConfig } from "vite";

// Plugins
import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";

export default {
  define: {
    __DATABASE_URL__: JSON.stringify(process.env.BUILD_VAR),
  },
  plugins: [cloudflare({ viteEnvironment: { name: "ssr" } }), reactRouter()],
} satisfies UserConfig;
