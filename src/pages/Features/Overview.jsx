import React from "react";
import { IndexContainer, ChartContainer, DateFilters } from "../../components";

const Overview = () => {
  return (
    <div className="flex flex-col gap-2 px-2">
      <div className="flex flex-1 flex-col justify-between gap-5 sm:flex-row">
        <div className="grow">
          <IndexContainer />
        </div>
        <div className="flex w-full flex-1 flex-col justify-center gap-2 rounded-xl border-b-4 border-green bg-white-a px-2 py-2 text-white shadow-lg backdrop-blur-lg">
          <h2 className="text-lg font-semibold tracking-wider sm:text-2xl">
            Filter
          </h2>
          <DateFilters />
        </div>
      </div>
      <div className="flex flex-1 grow flex-col items-center ">
        <h2 className="text-2xl font-bold tracking-widest text-sky-50">
          Report
        </h2>
        <ChartContainer />
      </div>
    </div>
  );
};

export default Overview;
