import React from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import { useSidebarContext } from "../context/sidebarContext";
const Navbar = () => {
  const { toggleSidebar } = useSidebarContext();

  return (
    <div
      className="flex 
      h-[100px] items-center justify-between border-b border-dark bg-transparent px-8
      text-3xl font-black tracking-wide text-sky-50 backdrop-blur-lg sm:w-full"
    >
      <div>
        <button onClick={toggleSidebar} className="">
          <RiMenuFoldFill />
        </button>
      </div>
      <h3>DASHBOARD</h3>
      <div></div>
    </div>
  );
};

export default Navbar;
