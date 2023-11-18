import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ expenses, title, type, colors }) => {
  const labelTypeAmount = {};

  if (expenses && expenses.length > 0) {
    expenses.forEach((expense) => {
      const label = expense.type;
      const title = expense.title;

      if (label === type) {
        if (labelTypeAmount[title]) {
          labelTypeAmount[title] += expense.amount;
        } else {
          labelTypeAmount[title] = expense.amount;
        }
      }
    });
  }

  const labels = Object.keys(labelTypeAmount);
  const values = Object.values(labelTypeAmount);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Amount",
        data: values,
        backgroundColor: colors.bgColors,
        borderColor: colors.borderColors,
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <div
      className="flex h-full flex-col gap-6 rounded-lg border
     border-white-a bg-transparent p-2 shadow-lg shadow-white-a backdrop-blur-lg"
    >
      <h2
        className={`text-center text-xl font-semibold tracking-wider ${
          type === "Expense" ? "text-orange-600" : "text-sky-500"
        } `}
      >
        {title}
      </h2>
      {expenses && expenses.length > 0 ? (
        <div className="flex grow items-center">
          <Doughnut data={data} />
        </div>
      ) : (
        <h3 className="text-center text-white">No Data</h3>
      )}
    </div>
  );
};

export default DoughnutChart;
