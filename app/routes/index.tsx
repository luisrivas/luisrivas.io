import { Link } from "@remix-run/react";
import styles from "~/styles/landing.css";
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="container flex mx-auto py-12 max-w-7xl px-6 desktop:px-0">
        <Link to="/" className="text-black text-lg">
          <h1 className="font-bold leading-tight">Luis Rivas</h1>
          <h2 className="leading-tight">Software Engineer</h2>
        </Link>
      </header>
      <main className="container mx-auto flex items-center justify-between max-w-7xl px-6 desktop:px-0">
        <div className="max-w-5xl">
          <img className="w-52 mb-4" src="./images/me.webp" />
          <h3 className="text-5xl leading-tight font-black text-black">Hi, I'm <span className="font-monospace font-bold text-blue decoration-tag">Luis</span></h3>
          <p className="text-2xl leading-normal font-base text-gray">
            I am a Software Engineer based in Bogotá, Colombia, with experience in Web technologies.
            I am passionate about improving the performance of products through engineering, and I am constantly looking to build new things.
          </p>
        </div>
        <div className="hidden desktop:flex flex-col gap-10 mt-36">
          <a href="https://twitter.com/luis_to_string">
            <FaTwitter title="My twitter" className="fill-black w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin title="My linkedin" className="fill-black w-6 h-6" />
          </a>
          <a href="https://github.com/luisrivas">
            <FaGithub title="My github" className="fill-black w-6 h-6" />
          </a>
        </div>
      </main>
      <footer className="container mx-auto max-w-7xl flex justify-between items-center px-6 desktop:px-0 py-4 border-t">
        <span className="text-gray">Working from home with a dog on my lap.</span>
        <div className="flex gap-8">
          <a href="https://twitter.com/luis_to_string">
            <FaTwitter title="My twitter" className="fill-black w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin title="My linkedin" className="fill-black w-6 h-6" />
          </a>
          <a href="https://github.com/luisrivas">
            <FaGithub title="My github" className="fill-black w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  )
}
