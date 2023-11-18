import React from "react";
import { Navbar, Sidebar } from "../../components";
import { Outlet } from "react-router-dom";
import useResize from "../../utils/useResize";
import { SmallSidebar } from "../../components";
import { useSidebarContext } from "../../context/sidebarContext";
const DashboardPage = () => {
  const size = useResize();
  const { isSidebarOpen } = useSidebarContext();

  return (
    <div
      className={`grid min-h-screen  ${
        size.width > 992 ? "grid-cols-[auto,1fr]" : ""
      } bg-main-bg bg-cover bg-center bg-no-repeat `}
    >
      <nav
        className={` transition-all duration-500 ease-in-out ${
          isSidebarOpen ? "w-[250px]" : "w-0"
        }`}
      >
        {size.width > 992 ? <Sidebar /> : <SmallSidebar />}
      </nav>

      <div className={`flex min-h-screen w-full grow flex-col gap-2`}>
        <div className="sticky top-0 z-30 h-[100px]">
          <Navbar />
        </div>
        <div className="mt-4 h-full grow px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
