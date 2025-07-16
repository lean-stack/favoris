import { Outlet, Scripts, ScrollRestoration } from "react-router";

import stylesheet from "./styles/root.css?url";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={stylesheet} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body className="bg-app-bg text-app-12">
        <div className="isolate min-h-svh w-full flex flex-col">{children}</div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
