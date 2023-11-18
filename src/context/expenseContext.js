import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/expenseReducer";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

const startDay = "01";
const lastDay = new Date(currentYear, currentMonth, 0).getDate();

const initState = {
  expenses: [],
  expenseLoading: false,
  expenseError: false,
  page: 1,
  totalPages: 1,
  filters: {
    title: "",
    type: "All",
    sort: "Latest",
    typeOptions: ["All", "Expense", "Income"],
    sortOptions: ["Latest", "Oldest", "Largest", "Smallest"],
  },
  date: {
    startDate: `${currentYear}/${currentMonth}/${startDay}`,
    endDate: `${currentYear}/${currentMonth}/${lastDay}`,
  },
  report: {},
};

const ExpenseContext = createContext({});

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <ExpenseContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  return useContext(ExpenseContext);
};
