import {Heading, Project} from "@/components/components";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div>
      <Heading heading="Projects" />
      <div className="flex flex-col gap-8" style={{ gap: "32px", padding:"0px 20px" }}>
        <Project
          title="College Mania"
          description="Developed and implemented a dynamic web platform connecting students, teachers, and alumni, enabling seamless knowledge sharing. Established a user-friendly interface, enhancing user engagement and satisfaction in a collaborative learning environment."
        />
        <Project
          title="Kaksha (Website/Dashboard)"
          description="Led a social initiative with friends to educate grades 9-12 on programming. Developed and designed the web-based Ed-tech platform, contributing to frontend and backend. Received positive feedback from inception."
        />
        <Project
          title="Personal Portfolio Website"
          description="My portfolio website showcases my achievements, capabilities, and professional background. It includes my resume, photo, contact details, projects, and other pertinent information reflecting my qualifications and experience."
        />
      </div>
    </div>
  );
};

export default Projects;
