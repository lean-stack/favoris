import { BookmarkIcon, LightbulbIcon } from "lucide-react";
import { Link } from "react-router";

export default function LandingRoute() {
  return (
    <div className="grow mx-auto max-w-xl flex flex-col items-center justify-center gap-4 p-4 text-center ">
      <title>Favoris</title>
      <h1 className="flex items-center gap-4 text-accent-11 my-2">
        <BookmarkIcon className="size-12" />
        <span className="text-5xl">les favoris</span>
      </h1>
      <p className="text-xl text-accent-12 text-balance">
        Sammlung meiner Lesezeichen aus dem weltweiten Netz
      </p>
      <p className="text-app-11">
        Früher gab es Lesezeichen-Dienste en masse. Naja, vielleicht etwas
        übertrieben. Nach und nach wurde leider alles eingestellt.
      </p>
      <p className="flex max-md:flex-col justify-center items-center text-accent-12 gap-2">
        <LightbulbIcon className="shrink-0 self-center" />
        <span>
          Dann schreibe ich mir halt meinen eigenen Dienst. Und hier ist er!
        </span>
      </p>
      <div>
        <Link
          className="text-xl text-accent-11 underline underline-offset-2"
          to="/links"
        >
          Zu den Links
        </Link>
      </div>
    </div>
  );
}
