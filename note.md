<div className={`max-w-screen grid h-screen sm:grid-cols-[auto,1fr]`}>
      {size.width > 768 && (
        <div className={`h-full w-[250px]`}>
          <Sidebar sideLinks={sideLinks} />
        </div>
      )}
      <div className={`grid grid-rows-[auto,1fr] bg-blue`}>
        <div className="flex h-[100px] items-center justify-between bg-white px-10 text-3xl font-black tracking-wider text-sky-600">
          <button onClick={() => setToggle(!toggle)}>
            <RiMenuFoldLine />
          </button>
          <h1 className="">DASHBOARD</h1>
          <div></div>
        </div>
        <div className=" mt-8 grow px-10 text-gray">
          <Outlet />
        </div>
      </div>
    </div>
