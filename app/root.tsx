import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStyles from "./tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Luis Rivas",
  viewport: "width=device-width,initial-scale=1",
  "og:title": "Luis Rivas",
  "og:description": "I talk about software development.",
  "og:image": "http://www.luisrivas.io/images/me.webp"
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Gantari:wght@400;700;900&family=Inconsolata:wght@700&display=swap" }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
