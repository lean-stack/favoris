import { db } from "../db/instance";
import type { Route } from "./+types/landing";

export async function loader({ context }: Route.LoaderArgs) {
  const user = await context.db.query.users.findFirst();
  return { user, db };
}

export default function LandingRoute({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <title>les favoris</title>
      <h1>
        <small>les</small> favoris {loaderData.db.url}
      </h1>
      <h2>User: {loaderData.user?.name}</h2>
    </div>
  );
}
