import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { socialMedia } from "../lib/constants";

export default function Home() {
  return (
    <main className="container mx-auto flex items-center justify-between max-w-5xl px-6 desktop:px-0 gap-4">
      <div className="max-w-5xl mb-10 text-balance">
        <Image
          height={208}
          width={208}
          className="mb-4 rounded-full max-sm:mx-auto"
          src="https://avatars.githubusercontent.com/u/2474521?v=4"
          alt="me like a memoji"
        />
        <h3 className="text-5xl leading-tight font-black text-black">
          Hey there! I&apos;m Luis Rivas.
        </h3>
        <p className="text-2xl leading-normal font-base text-gray mt-4">
          I&apos;m a software engineer who&apos;s all about web development. I
          love diving into planning, coding, and building new things from
          scratch. Seeing an idea come to life and knowing that I played a part
          in making it happen is so satisfying.
        </p>
        <p className="text-2xl leading-normal font-base text-gray mt-4">
          I&apos;m always looking for ways to tweak and improve the things I
          work on, kind of like how a chef keeps perfecting their signature
          dish. I enjoy the problem-solving aspect of figuring out how to
          enhance accessibility, speed up performance, and deliver more value to
          the users in each new version.
        </p>
        <p className="text-2xl leading-normal font-base text-gray mt-4">
          But you know what really gets me excited? Sharing what I know with
          others. There&apos;s something special about collaborating with a
          team, bouncing ideas off each other, and learning from one another. I
          believe that when we share our knowledge and experiences, we can
          achieve so much more together.
        </p>
        <p className="text-2xl leading-normal font-base text-gray mt-4">
          So yeah, that&apos;s me in a nutshell - a passionate web developer
          who&apos;s always eager to build, improve, and share. It&apos;s not
          just a job for me; it&apos;s a way of life!
        </p>
      </div>
      <div className="hidden desktop:flex flex-col gap-10 mt-36">
        <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
          <FaXTwitter title="My twitter" className="fill-black w-6 h-6" />
        </a>
        <a
          href={socialMedia.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin title="My linkedin" className="fill-black w-6 h-6" />
        </a>
        <a href={socialMedia.github} target="_blank" rel="noopener noreferrer">
          <FaGithub title="My github" className="fill-black w-6 h-6" />
        </a>
      </div>
    </main>
  );
}
