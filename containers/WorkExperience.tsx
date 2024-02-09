import { Experience, Heading } from "@/components/components";
import React from "react";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <div>
      <Heading heading="Work Experience" />
      <div
        className="flex flex-col gap-8"
        style={{ gap: "32px", padding: "0px 20px" }}
      >
        <Experience
        start="Dec, 2023"
        end="March, 2023"
          role="Production executive"
          company="Group Futurista"
          responsibility="This role involves sourcing speakers, managing production activities, coordinating with teams, conducting research, and handling administrative tasks. Collaboration and attention to detail are key for successful event execution."
        />
        <Experience
        start="Aug 2021"
        end="Oct 2021"
        role="Data analysis Intern"
        company="Cloobot Techlabs"
          responsibility="This role involves coordinating with the tech team to clean and visualize data, understanding client needs to create appropriate data models, and collaborating with marketing for social media and SEO activities."
        />
        <Experience
        start="July 2020"
        end="Apr 2021"
          role="Developer & Trainer"
          company="Kaksha"
          responsibility="Co-founded an educational platform focusing on programming education for classes 8 to 12. Successfully enrolled 27 students in a Python course, assisted product enhancement, managed workflow, and distribution, and worked on advertising and sales."
        />
      </div>
    </div>
  );
};

export default WorkExperience;
