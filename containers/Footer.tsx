import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      className="mx-auto"
      style={{ marginTop: "100px" }}
    >
      <div className="text-xs text-neutral-500 tracking-wider leading-5  p-[25px] sm:w-[600px] w-full text-justify">
        Loosely designed in <span className=" text-white">Figma</span> and coded
        in <span>Visual Studio Code</span> by yours truly. Built with{" "}
        <span>Next.js, Tailwind CSS, Docker</span> and <span>Prisma</span>, deployed with
        Vercel. All text is set in the <span>Inter</span> typeface.
      </div>
    </div>
  );
};

export default Footer;
