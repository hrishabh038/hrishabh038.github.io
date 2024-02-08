import React from "react";

type Props = { 
  className?: string
  children: React.ReactNode
  heading: string
  link: string
  linkText: string
 };

const authFormContainer = (props: Props) => {
  return (
    <div className="rounded-md p-5 w-full sm:w-[400px] flex flex-col gap-6 bg-slate-400/5">
      <h1 className="text-lg font-bold">{props.heading}</h1>
      <div className={props.className}>{props.children}</div>
      <div className="w-full text-center">
        <a href={props.link} className="cursor-pointer hover:underline text-sm w-fit text-neutral-400">
          <p>{props.linkText}</p>
        </a>
      </div>
    </div>
  );
};

export default authFormContainer;
