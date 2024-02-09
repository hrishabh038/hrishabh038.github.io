import {Education, Heading} from "@/components/components";
import React from "react";

type Props = {};

const Qualification = (props: Props) => {
  return (
    <div>
      <Heading heading="Qualification" />
      <div className="flex flex-col gap-8" style={{gap:"32px", padding:"0px 20px"}}>
        <Education
          start="2019"
          end="2023"
          majour="B.Tech(CSE)"
          board="BTech"
          institute="LNCT Group of Colleges"
          location="Bhopal, MP, India"
        />
        <Education
          start="2018"
          end="2019"
          majour="Senior Secondary (XII), PCM"
          board="CBSE"
          institute="Mukularanayam School"
          location="Varanasi, UP, India"
        />
        <Education
          start="2016"
          end="2017"
          majour="Secondary (X)"
          board="CBSE"
          institute="Mukularanayam School"
          location="Varanasi, UP, India"
        />
      </div>
    </div>
  );
};

export default Qualification;
