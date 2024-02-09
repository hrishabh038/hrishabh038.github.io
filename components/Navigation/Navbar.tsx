import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Link,
  Linkedin,
  LucideIcon,
  Twitter,
} from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";
const socialMedia = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/hrishabh038/",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/hrishabh038/",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/hrishabh038/",
  },
  {
    icon: Github,
    href: "https://github.com/hrishabh038",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/hrishabh038",
  },
];

type Props = { className?: string };

const Navbar = (props: Props) => {
  const social_media = socialMedia;
  return (
    <nav className={twMerge(" flex flex-col items-start", props.className)}>
      <div className="relative w-full h-[300px] lg:h-full mb-[30px]">
        <img src={"/images/4.jpg"} alt="hrishabh038" className="rounded-md aspect-square object-cover w-full h-full" />
      </div>
      <div className="">
        <a href="https://drive.google.com/file/d/1zMsKGNPcOodiu6GJBEtMsEweO_ufhQUH/view?usp=sharing" target="_blank" className="text-4xl font-bold flex items-baseline hover:underline">Hrishabh Jain<ExternalLink className="text-blue-300" size={15} /></a>
        <p className=" text-lg mt-[5px] mb-[16px] text-white/75 ">
          Software Engineer
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
