import {Education, Heading} from "@/components/components";
import React from "react";

type Props = {};

const Qualification = (props: Props) => {
  return (
    <div>
      <Heading heading="Qualification" />
      <div className="flex flex-col gap-8" style={{gap:"32px", padding:"0px 20px"}}>
        <Education />
        <Education />
        <Education />
      </div>
    </div>
  );
};

export default Qualification;
