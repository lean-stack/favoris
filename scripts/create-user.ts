import * as p from "@clack/prompts";
import { drizzle } from "drizzle-orm/node-postgres";
import slugify from "slugify";

import { users } from "../app/db/schema.ts";

if (!process.env.DATABASE_URL) {
  throw new Error("Undefined DATABASE_URL in dev vars.");
}

const db = drizzle(process.env.DATABASE_URL);

p.intro(`Neuen User anlegen`);

const validateRequired = (value: string) =>
  value.length === 0 ? "Darf nicht leer sein." : undefined;
const validateEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value))
    return "Bitte eine gültige Email-Adresse angeben.";
  return undefined;
};

const name = await p.text({
  message: "Name des Users",
  validate: validateRequired,
});

if (p.isCancel(name)) {
  p.cancel("Abgebrochen. Kein User wurde angelegt");
  process.exit(0);
}

const slug = await p.text({
  message: "URL-Slug des Usernamens",
  initialValue: slugify(name, {
    locale: "de",
    lower: true,
  }),
  validate: validateRequired,
});

if (p.isCancel(slug)) {
  p.cancel("Abgebrochen. Kein User wurde angelegt");
  process.exit(0);
}

const email = await p.text({
  message: "Email-Adresse",
  validate: validateEmail,
});

if (p.isCancel(email)) {
  p.cancel("Abgebrochen. Kein User wurde angelegt.");
  process.exit(0);
}

const s = p.spinner();
s.start("User wird angelegt.");

try {
  await db.insert(users).values({ name, slug, email });
} catch (err) {
  p.cancel("Das hat nicht geklappt. Kein User wurde angelegt.");
  process.exit(0);
}

s.stop(`Hat geklappt. Neuer User >>${name}<< wurde angelegt.`);

p.outro(`Das war es. Und Tschüss`);
