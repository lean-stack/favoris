import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

declare const __DATABASE_URL__: string;

const client = neon(__DATABASE_URL__);
export const db = drizzle({ client, schema });
