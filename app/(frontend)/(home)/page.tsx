import {About, Footer, Projects, Qualification, WorkExperience} from "@/containers/containers";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-[80px]">
      <About />
      <WorkExperience />
      <Qualification />
      <Projects />
      <Footer />
    </main>
  );
}
