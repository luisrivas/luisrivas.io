import type { Metadata } from "next";
import Link from "next/link";
import { Gantari } from "next/font/google";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import "./globals.css";
import { socialMedia } from "../lib/constants";

const gantari = Gantari({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Rivas",
  description: "I am a passionate web developer who's always eager to build, improve, and share my knowledge with others.",
  keywords: "web development, software engineering, performance optimization, scalable applications, react, typescript, remix, web technologies, full stack, front end",
  openGraph: {
    title: "Luis Rivas",
    description: "I am a passionate web developer who's always eager to build, improve, and share my knowledge with others.",
    images: ["https://avatars.githubusercontent.com/u/2474521?v=4"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col h-screen justify-between ${gantari.className}`}
      >
        <header className="container flex mx-auto py-12 max-w-5xl px-6 desktop:px-0">
          <Link href="/" className="text-black text-lg">
            <h1 className="font-bold leading-tight">Luis Rivas</h1>
            <h2 className="leading-tight">Software Engineer</h2>
          </Link>
        </header>
        {children}
        <footer className="container mx-auto max-w-5xl flex flex-row-reverse items-center px-6 desktop:px-0 py-4 border-t border-black/15">
          <div className="flex gap-8">
            <a href={socialMedia.twitter}>
              <FaXTwitter title="My twitter" className="fill-black w-6 h-6" />
            </a>
            <a href={socialMedia.linkedin}>
              <FaLinkedin title="My linkedin" className="fill-black w-6 h-6" />
            </a>
            <a href={socialMedia.github}>
              <FaGithub title="My github" className="fill-black w-6 h-6" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
