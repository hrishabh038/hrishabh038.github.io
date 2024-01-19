import {Heading} from "@/components/components";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
        <Heading heading="About"/>
      <p style={{padding: "0px 25px"}}>
        An Engineering graduate with a relentless drive for continuous
        improvement in his current knowledge. I am a computer science
        engineering student at JNCT, Bhopal. I'm still enthusiastically
        learning, new and relevent skills also different frameworks. I tend to
        learn more and to learn something different too.
        <br></br>
        <br></br>
        Hello! My name is Hrishabh and I enjoy creating things that live on the
        internet. My interest in web development started back in 2019 when I
        decided to try editing custom Tumblr themes — turns out hacking together
        a custom reblog button taught me a lot about HTML & CSS!
        <br></br>
        <br></br>
        Fast-forward to today, and I’ve had the privilege of working at an event
        management agency, a start-up, a huge corporation, and a student-led
        social working startup. My main focus these days is building accessible,
        inclusive projects and managing events at Group Futurista.
      </p>
    </div>
  );
};

export default About;
