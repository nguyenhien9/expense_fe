import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  AddPage,
  ExpensesPage,
  DashboardPage,
  ErrorPage,
  LandingPage,
  Overview,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        path: "",
        element: <Overview />,
      },
      {
        path: "all-expenses",
        element: <ExpensesPage />,
      },
      {
        path: "add-expenses",
        element: <AddPage />,
      },
      {
        path: ":id",
        element: <AddPage />,
      },
    ],
  },
  { path: "*", element: <ErrorPage /> }, // Move the wildcard route here
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" draggablePercent={60} />
    </>
  );
}

export default App;
