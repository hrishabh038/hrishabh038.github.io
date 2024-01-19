import React from "react";

type Props = {};

const Project = (props: Props) => {
  return (
    <div className="flex items-start gap-3 sm:gap-6 flex-col sm:flex-row cursor-pointer group hover:bg-white/5 p-3 sm:p-5 rounded-md">
      <div className=" rounded-md flex items-center justify-center gap-2 text-xs mt-1 aspect-video bg-slate-500 min-w-[125px] ">
        <span className="font-bold text-slate-900 text-2xl">{"Production Executive".slice(0,2).toUpperCase()}</span>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center gap-2 text-neutral-300 group-hover:text-white">
          <span>Production Executive</span>
        </h1>
        <p className="line-clamp-5 text-sm">
          Connecting directly with the professional speakers to make them come
          and share their knowledge and experience at our webinars. Planning and
          managing the production activities in Event industry. Coordinating
          directly with the production team and researching on data accordingly.
          Working on the fine details and other office and administrative
          functions. Collaborating with teams for successfull completion of the
          event.
        </p>
      </div>
    </div>
  );
};

export default Project;
