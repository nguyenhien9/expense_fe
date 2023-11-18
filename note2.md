import React, { useState } from "react";
import { Navbar, Sidebar } from "../../components";

import { Outlet } from "react-router-dom";

import useResize from "../../utils/useResize";
const DashboardPage = () => {
const [toggle, setToggle] = useState(false);
const size = useResize();

return (
<div className="grid min-h-screen w-full sm:grid-cols-[auto,1fr]">
<nav className="h-full w-[250px] bg-white">
<Sidebar />
</nav>
<div className="grid grid-rows-[auto,1fr] bg-blue">
{/_ <Navbar /> _/}
<div className="h-[10000px] overflow-hidden px-10 py-8">
<div>
<Outlet />
</div>
</div>
</div>
</div>
);
};

export default DashboardPage;
