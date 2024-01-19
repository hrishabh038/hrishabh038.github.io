import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  LucideIcon,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
const socialMedia = [
  {
    icon: Instagram,
    href: "#",
  },
  {
    icon: Facebook,
    href: "#",
  },
  {
    icon: Linkedin,
    href: "#",
  },
  {
    icon: Github,
    href: "#",
  },
  {
    icon: Twitter,
    href: "#",
  },
];

type Props = { className?: string };

const Navbar = (props: Props) => {
  const social_media = socialMedia;
  return (
    <nav className={twMerge(" flex flex-col items-start", props.className)}>
      <div className="relative w-full h-[300px] lg:h-full mb-[30px]">
        <Image src={"/images/4.jpg"} alt="hrishabh038" className="rounded-md aspect-square" objectFit="cover" fill />
      </div>
      <div className="">
        <h1 className="text-4xl font-bold">Hrishabh Jain</h1>
        <p className=" text-lg mt-[5px] mb-[16px] text-white/75 ">
          Software Engineer Trainee
        </p>
        <p className="text-neutral-400 text-left">
          I build pixel-perfect, accessible products for the web and beyond.
        </p>
      </div>
      <ul className="flex items-center gap-3 mt-[30px]">
        {social_media.map((sm) => (
          <SocialMediaButton key={sm.href} Icon={sm.icon} href={sm.href} />
        ))}
      </ul>
    </nav>
  );
};

type SMProps = { Icon: LucideIcon; href: string };
const SocialMediaButton = ({ Icon, href }: SMProps) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        className=" text-neutral-400 hover:text-white"
      >
        <Icon />
      </a>
    </li>
  );
};

export default Navbar;
