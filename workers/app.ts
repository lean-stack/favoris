import type { NeonHttpDatabase } from "drizzle-orm/neon-http";

import { neon } from "@neondatabase/serverless";
import { createRequestHandler } from "react-router";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../app/db/schema";

declare module "react-router" {
  export interface AppLoadContext {
    cloudflare: {
      env: Env;
      ctx: ExecutionContext;
    };
    db: NeonHttpDatabase<typeof schema>;
  }
}

const requestHandler = createRequestHandler(
  // @ts-ignore
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

export default {
  async fetch(request, env, ctx) {
    const client = neon(env.DATABASE_URL);
    const db = drizzle({ client, schema });
    return requestHandler(request, {
      cloudflare: { env, ctx },
      db,
    });
  },
} satisfies ExportedHandler<Env>;
