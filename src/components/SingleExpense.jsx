import React from "react";
import { MdDescription } from "react-icons/md";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { formatDate, formatPrice } from "../utils/helpers";
import useResize from "../utils/useResize";
const SingleExpense = ({ expense, onEdit, onDelete }) => {
  const size = useResize();
  return (
    <div
      className=" flex h-[250px] w-full flex-col gap-1 rounded-xl border border-white-a bg-white-a 
    px-4 text-white shadow-lg shadow-white-a backdrop-blur-md transition duration-300 ease-in-out hover:bg-transparent "
    >
      <header className="border-b-solid flex h-[150px] flex-row items-center gap-2 border-b-2 border-white-a py-2">
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-emerald-800 text-3xl font-bold text-white">
          {expense.title.charAt(0)}
        </div>
        <div className="flex flex-col font-semibold tracking-wider">
          <h2 className="text-2xl">{expense.title}</h2>
          <p className="">{formatPrice(expense.amount)}</p>
        </div>
      </header>

      <section
        className={`grid h-full w-full ${
          size.width > 450 ? "grid-cols-2" : "grid-cols-1"
        }  items-center justify-between text-xs tracking-wider sm:text-sm`}
      >
        <p className="flex items-center gap-2">
          <span className="flex items-center justify-center">
            <MdDescription />
          </span>
          <span>{expense.desc}</span>
        </p>
        <p
          className={`flex w-20 items-center justify-center rounded-md px-2 py-1
          ${
            expense.type === "Expense" ? "bg-rose-800" : "bg-emerald-700"
          } text-xs text-white `}
        >
          {expense.type}
        </p>
        <p className="flex items-center gap-2">
          <span>
            <BsFillCalendarWeekFill />
          </span>
          <span>{formatDate(expense.date)}</span>
        </p>
      </section>

      <div className="flex flex-row gap-4 py-2 text-white">
        <button
          className="w-[80px] rounded-md bg-slate-500 px-2 py-1 transition-all duration-200 ease-linear hover:bg-dark"
          onClick={() => onEdit(expense)}
        >
          <span>Edit</span>
        </button>
        <button
          className="w-[80px] rounded-md bg-rose-800 px-2 py-1 transition-all duration-200 ease-linear hover:bg-rose-950"
          onClick={() => onDelete(expense)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleExpense;
