import { ArrowBigRightDash } from "lucide-react";
import React from "react";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="flex items-start gap-3 sm:gap-6 flex-col sm:flex-row cursor-pointer group hover:bg-white/5 p-3 sm:p-5 rounded-md">
      <div className="flex items-center gap-2 text-xs mt-1">
        <span className="text-neutral-500">2023</span>
        <div className="w-[15px] h-[1px] bg-neutral-500"></div>
        <span className="text-neutral-500">2023</span>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center gap-2 text-neutral-300 group-hover:text-white">
          Production Executive
          @
          Group Futurista
        </h1>
        <p className="line-clamp-5 text-sm">
          Connecting directly with the professional speakers to make them come
          and share their knowledge and experience at our webinars.
          Planning and managing the production activities in Event
          industry. Coordinating directly with the production team
          and researching on data accordingly. Working on the fine
          details and other office and administrative functions.
          Collaborating with teams for successfull completion of the event.
        </p>
        <div className="mt-3 flex gap-2 flex-wrap">
            <Cubes />
            <Cubes />
            <Cubes />
            <Cubes />
            <Cubes />
        </div>
      </div>
    </div>
  );
};

const Cubes = () => {
    return (
        <span className="rounded-md px-1 bg-white/50 text-black text-sm">
            span
        </span>
    )
}

export default Experience;
