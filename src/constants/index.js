import { AiOutlineBarChart } from "react-icons/ai";
import { HiDocumentChartBar } from "react-icons/hi2";
import { BiSolidAddToQueue } from "react-icons/bi";

export const sideLinks = [
  {
    id: "overview",
    title: "Overview",
    path: "",
    icon: <AiOutlineBarChart />,
  },
  {
    id: "allExpenses",
    title: "All Expenses",
    path: "all-expenses",
    icon: <HiDocumentChartBar />,
  },
  {
    id: "addExpense",
    title: "Add Expense",
    path: "add-expenses",
    icon: <BiSolidAddToQueue />,
  },
];

export const menuLists = [
  { id: "expense", text: "Expense", value: "Expense" },
  { id: "income", text: "Income", value: "Income" },
];
