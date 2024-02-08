import { Navbar } from "@/components/components";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <main className=" w-full lg:w-[1000px] mx-auto">
      <Navbar className="w-full sm:w-[330px] lg:fixed top-0 bottom-0  py-[70px] lg:py-[100px] px-[25px] sm:px-[20px]" />
      <div className=" lg:pl-[430px]   py-[40px] lg:py-[100px]">
        {props.children}
      </div>
    </main>
  );
};

export default Layout;
