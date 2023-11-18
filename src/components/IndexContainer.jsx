import React, { useEffect } from "react";
import IndexItem from "./IndexItem";
import { useExpenseContext } from "../context/expenseContext";
import { getReportExpense } from "../action/expenseAction";
import { TbPigMoney } from "react-icons/tb";
import { GiHeartMinus } from "react-icons/gi";
import { formatPrice } from "../utils/helpers";
const IndexContainer = () => {
  const { dispatch, report, date } = useExpenseContext();

  useEffect(() => {
    getReportExpense(dispatch, date);
  }, [date]);

  const stats = [
    {
      title: "Total Income",
      amount: report.totalIncome || 0,
      icon: <TbPigMoney />,
      color: "#4ECDC4",
    },
    {
      title: "Total Expense",
      amount: report.totalExpense || 0,
      icon: <GiHeartMinus />,
      color: "orange",
    },
  ];

  return (
    <div className="grid h-full gap-5 sm:grid-cols-2">
      {stats.map((item) => {
        const { title, amount, icon, color } = item;
        return (
          <IndexItem
            key={title}
            title={title}
            amount={formatPrice(amount)}
            icon={icon}
            color={color}
          />
        );
      })}
    </div>
  );
};

export default IndexContainer;
