import type { Route } from "./+types/landing";

export async function loader({ context }: Route.LoaderArgs) {
  return await context.db.query.users.findFirst();
}

export default function LandingRoute({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <title>les favoris</title>
      <h1>
        <small>les</small> favoris
      </h1>
      <h2>User: {loaderData?.name}</h2>
    </div>
  );
}
