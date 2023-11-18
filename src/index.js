import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExpenseProvider } from "./context/expenseContext";
import { SidebarProvider } from "./context/sidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ExpenseProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </ExpenseProvider>,
);
