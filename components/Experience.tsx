import { ArrowBigRightDash } from "lucide-react";
import React from "react";

type Props = {
  start: string
  end: string
  role: string;
  responsibility: string;
  company: string;
};

const Experience = (props: Props) => {
  return (
    <div className="flex items-start gap-3 sm:gap-6 flex-col sm:flex-row cursor-pointer group hover:bg-white/5 p-3 sm:p-5 rounded-md">
      <div className="flex items-center gap-2 text-xs mt-1">
        <span className="text-neutral-500">{props.start}</span>
        <div className="w-[15px] h-[1px] bg-neutral-500"></div>
        <span className="text-neutral-500">{props.end}</span>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center gap-2 text-neutral-300 group-hover:text-white">
          <span>{props.role}</span>
          <span>@</span>
          <span>{props.company}</span>
        </h1>
        <p className="text-sm">{props.responsibility}</p>
      </div>
    </div>
  );
};

export default Experience;
