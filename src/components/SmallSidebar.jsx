import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { sideLinks } from "../constants";
import { NavLink } from "react-router-dom";
import { useSidebarContext } from "../context/sidebarContext";

const SmallSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarContext();
  return (
    <div
      className={`${
        isSidebarOpen ? "translate-x-0" : ""
      } fixed left-0 top-0 z-50 flex h-full w-full -translate-x-full flex-col bg-transparent text-white backdrop-blur-lg transition duration-500 ease-in-out`}
    >
      <div className="ml-auto mr-7 flex h-[80px] items-center justify-center">
        <button
          onClick={toggleSidebar}
          className="flex h-8 w-8 items-center justify-center rounded-lg"
        >
          <AiOutlineClose size={22} />
        </button>
      </div>
      <ul className="flex grow flex-col gap-8 p-8 text-lg tracking-widest ">
        {sideLinks.map((link) => (
          <li key={link.id} className="" onClick={toggleSidebar}>
            <NavLink to={link.path} className="flex items-center gap-2">
              <span>{link.icon}</span>
              <span>{link.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmallSidebar;
