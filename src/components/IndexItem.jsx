import React from "react";

const IndexItem = ({ title, amount, icon, color }) => {
  return (
    <div
      className={`flex h-full flex-col justify-center gap-5 bg-white-a p-6 
      backdrop-blur-lg text-${color} rounded-xl border-b-4 border-${color} tracking-widest`}
      style={{ color: `${color}` }}
    >
      <p className="flex items-center justify-between text-2xl font-semibold sm:text-4xl">
        <span>{amount}</span>
        <span className="mr-2 text-3xl sm:text-5xl">{icon}</span>
      </p>
      <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
    </div>
  );
};

export default IndexItem;
