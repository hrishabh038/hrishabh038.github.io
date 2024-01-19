import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      className="text-xs text-neutral-500 tracking-wider leading-5 mt-24  px-[25px]"
      style={{ marginTop: "100px" }}
    >
      Loosely designed in <span className=" text-white">Figma</span> and coded
      in <span>Visual Studio Code</span> by yours truly. Built with{" "}
      <span>Next.js</span> and <span>Tailwind CSS</span>, deployed with Vercel.
      All text is set in the <span>Inter</span> typeface.
    </div>
  );
};

export default Footer;
