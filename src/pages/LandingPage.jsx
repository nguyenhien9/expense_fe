import React from "react";
import { GiExpense } from "react-icons/gi";
import { expense } from "../assets";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="h-screen">
      <div className="mx-auto flex h-full max-w-screen-xl flex-col p-8">
        <div className="flex h-[100px] items-center gap-5 text-3xl">
          <span className="flex h-[70px] w-[70px] items-center justify-center rounded-xl bg-sky-500 p-4 text-white">
            <GiExpense size={30} />
          </span>
          <span className="font-bold tracking-widest text-sky-500">
            EXPENSE
          </span>
        </div>
        <div className="grid h-[500px] max-h-full grow py-8 sm:grid-cols-2">
          <div className="flex flex-col gap-10 py-20">
            <h1 className="grid text-4xl font-black tracking-widest text-sky-700">
              <span className="">PERSONAL</span>
              <span> EXPENSE MANAGEMENT</span>
            </h1>
            <p className="leading-7 tracking-wider text-gray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Link
              to="/dashboard"
              className="w-[150px] rounded-lg bg-sky-500 px-4 py-2 text-center text-sm text-white sm:w-1/3 sm:text-lg"
            >
              To dashboard
            </Link>
          </div>
          <div className="hidden h-[500px] sm:block">
            <img
              src={expense}
              alt="cover-img"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
