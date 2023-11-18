import React from "react";
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";
import { useExpenseContext } from "../../context/expenseContext";
const ChartContainer = () => {
  const { report } = useExpenseContext();

  const colors_1 = {
    bgColors: ["#D4606B", "#D6A0AF", "#D33F49", "#D45863", "#D4505A"],
    borderColors: ["#D4606B", "#D6A0AF", "#D33F49", "#D45863", "#D4505A"],
  };
  const colors_2 = {
    bgColors: ["#00A6A6", "#BBDEF0", "#5EC2CB", "#8DD0DE", "#78B857"],
    borderColors: ["#00A6A6", "#BBDEF0", "#5EC2CB", "#8DD0DE", "#78B857"],
  };

  return (
    <div className="grid w-full gap-2 py-4 sm:grid-cols-2 ">
      <div className="w-full rounded-lg bg-transparent shadow-lg shadow-white-a backdrop-blur-xl ">
        <LineChart expenses={report.expenses} title="Expense Management" />
      </div>
      <div className="grid gap-2 rounded-lg shadow-lg sm:grid-cols-2 ">
        <div className="">
          <DoughnutChart
            expenses={report.expenses}
            type="Expense"
            title="Expense Detail"
            colors={colors_1}
          />
        </div>
        <div>
          <DoughnutChart
            expenses={report.expenses}
            type="Income"
            title="Income Detail"
            colors={colors_2}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartContainer;
