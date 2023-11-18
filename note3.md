import React, { useState } from "react";
import { Navbar, Sidebar } from "../../components";

import { Outlet } from "react-router-dom";

import useResize from "../../utils/useResize";
const DashboardPage = () => {
const [toggle, setToggle] = useState(false);
const size = useResize();

return (
<div
      className="grid min-h-screen
       w-full
      grid-cols-[auto,1fr]"
    >
<nav className="h-full w-[250px] bg-white">
<Sidebar />
</nav>

      <div className="grid h-[10000px] grid-rows-[auto,1fr] overflow-y-visible">
        <Navbar />
        <div className=" bg-sky-50 px-10 py-8">
          <Outlet />
        </div>
      </div>
    </div>

);
};

export default DashboardPage;
