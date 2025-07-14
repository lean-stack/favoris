import type { UserConfig } from "vite";

// Plugins
import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";

export default {
  plugins: [cloudflare({ viteEnvironment: { name: "ssr" } }), reactRouter()],
} satisfies UserConfig;
