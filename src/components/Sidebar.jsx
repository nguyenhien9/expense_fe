import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiExpense } from "react-icons/gi";
import { sideLinks } from "../constants";
import { useSidebarContext } from "../context/sidebarContext";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const { isSidebarOpen } = useSidebarContext();

  return (
    <div
      className={`${isSidebarOpen ? "translate-x-0" : ""}
      
      fixed left-0 top-0 z-50 h-full w-full -translate-x-full 
      bg-transparent tracking-wide text-white backdrop-blur-lg transition-all duration-500 ease-in-out sm:w-[250px]`}
    >
      <div className="flex h-[100px] w-[250px] items-center justify-center">
        <h2 className="flex items-center justify-between gap-4 text-xl font-black sm:text-3xl">
          <span>
            <GiExpense />
          </span>
          <span>EXPENSE</span>
        </h2>
      </div>
      <ul className="flex h-full w-full flex-col border-r border-dark text-lg tracking-widest text-white">
        {sideLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title
                ? "transform bg-sky-50 text-dark "
                : "text-white"
            } flex h-[50px] items-center px-7 leading-[50px]
              transition ease-in-out hover:bg-sky-50 hover:text-dark`}
            onClick={() => setActive(link.title)}
          >
            <NavLink
              to={link.path}
              className="cubic-bezier[0.25, 0.1, 0.25, 1] flex items-center gap-5  transition-transform duration-300 hover:translate-x-2"
            >
              <span>{link.icon}</span>
              <span>{link.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
