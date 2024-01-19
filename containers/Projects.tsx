import {Heading, Project} from "@/components/components";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div>
      <Heading heading="Projects" />
      <div className="flex flex-col gap-8" style={{ gap: "32px", padding:"0px 20px" }}>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
