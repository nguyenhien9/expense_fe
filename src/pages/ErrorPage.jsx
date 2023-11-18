import React from "react";
import { notFound } from "../assets";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="h-screen ">
      <div className="mx-auto h-full max-w-screen-xl p-8 ">
        <div className="flex h-[500px] max-h-full grow flex-col items-center">
          <div className="h-[400px] w-[400px]">
            <img
              src={notFound}
              alt="cover-img"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-5 font-semibold">
            <h2 className="text-3xl tracking-wider text-sky-600">
              Oops! Something went wrong!
            </h2>
            <button className="mx-auto w-1/3 rounded-lg bg-sky-600 py-2 text-white">
              <Link to="/">Back Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
