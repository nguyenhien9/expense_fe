import React from "react";
import { formatDate } from "../../utils/helpers";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const LineChart = ({ expenses, title }) => {
  const groupInfo = [];
  if (expenses && expenses.length > 0) {
    expenses.forEach((expense) => {
      const date = formatDate(expense.date);
      const dailyInfo = {
        date: "",
        income: 0,
        expense: 0,
      };
      dailyInfo.date = date;
      dailyInfo.income += expense.type === "Income" ? expense.amount : 0;
      dailyInfo.expense += expense.type === "Expense" ? expense.amount : 0;
      groupInfo.push(dailyInfo);
    });
  }

  const accumulateInfo = {};

  if (groupInfo.length > 0) {
    groupInfo.forEach((dailyInfo) => {
      const date = dailyInfo.date;

      if (!accumulateInfo[date]) {
        accumulateInfo[date] = {
          income: 0,
          expense: 0,
        };
      }

      accumulateInfo[date].income += dailyInfo.income;
      accumulateInfo[date].expense += dailyInfo.expense;
    });
  }

  const labels = Object.keys(accumulateInfo);
  const totalIncomes = labels.map((date) => accumulateInfo[date].income);
  const totalExpenses = labels.map((date) => accumulateInfo[date].expense);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
    },
  };
  const data = {
    labels: labels,

    datasets: [
      {
        label: "Income",
        data: totalIncomes,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.3,
      },
      {
        label: "Expense",
        data: totalExpenses,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.3,
      },
    ],
  };
  return (
    <div
      className="flex h-full flex-col gap-6 rounded-lg border
     border-white-a p-2 text-white"
    >
      <h2 className={`text-center text-xl font-semibold tracking-wider`}>
        {title}
      </h2>
      {expenses && expenses.length > 0 ? (
        <div className="flex grow items-center">
          <Line options={options} data={data} />
        </div>
      ) : (
        <h3 className="text-center text-white">No Data</h3>
      )}
    </div>
  );
};

export default LineChart;
