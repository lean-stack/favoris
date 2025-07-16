import type { Route } from "./+types/landing";

import { db } from "../db/instance";

export async function loader() {
  const user = await db.query.users.findFirst();
  return { user };
}

export default function LandingRoute({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <title>les favoris</title>
      <h1>
        <small>les</small> favoris
      </h1>
      <h2>User: {loaderData.user?.name}</h2>
    </div>
  );
}
