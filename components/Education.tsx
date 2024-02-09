import { School } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  start: string
  end: string
  institute: string
  majour: string
  board: string
  location: string
};

const Education = (props: Props) => {
  return (
    <div className="flex items-start gap-3 sm:gap-6 flex-col sm:flex-row cursor-pointer group hover:bg-white/5 p-3 sm:p-5 rounded-md">
      <div className="aspect-square relative w-[100px] flex items-center justify-center border rounded-md border-slate-500 text-slate-500 bg-white/5">
       <School size={50} />
      </div>
      <div className="">
        <div className="flex items-center gap-2 text-xs mt-1">
          <span className="text-neutral-400">{props.start}</span>
          <div className="w-[15px] h-[1px] bg-neutral-400"></div>
          <span className="text-neutral-400">{props.end}</span>
        </div>
        <h1 className="flex items-center gap-2 text-neutral-300 my-1">
          <span>{props.board}</span>
          <span>@</span>
          <span>{props.institute}</span>
        </h1>
        <p className="text-xl font-bold text-white">{props.majour}</p>
        <p>{props.location}</p>
      </div>
    </div>
  );
};

export default Education;
