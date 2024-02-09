import React from "react";

type Props = {
  title: string
  description: string
};

const Project = (props: Props) => {
  return (
    <div className="flex items-start gap-3 sm:gap-6 flex-col sm:flex-row cursor-pointer group hover:bg-white/5 p-3 sm:p-5 rounded-md">
      <div className=" rounded-md flex items-center justify-center gap-2 text-xs mt-1 aspect-video bg-slate-500 min-w-[125px] ">
        <span className="font-bold text-slate-900 text-2xl">{"Production Executive".slice(0,2).toUpperCase()}</span>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center gap-2 text-neutral-300 group-hover:text-white">
          <span>{props.title}</span>
        </h1>
        <p className=" text-sm">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Project;
