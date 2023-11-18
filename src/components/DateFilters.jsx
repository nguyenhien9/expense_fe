import React from "react";
import { TextField } from "@mui/material";
import { useExpenseContext } from "../context/expenseContext";
import { getDateFilters } from "../action/expenseAction";
import { formatDate } from "../utils/helpers";
const DateFilters = () => {
  const { dispatch, date } = useExpenseContext();
  const { startDate, endDate } = date;

  const handleChange = (e) => {
    const { name, value } = e.target;

    const data = {
      ...date,
      [name]: value,
    };

    getDateFilters(dispatch, data);
  };

  return (
    <div className="flex w-full flex-col items-center gap-5">
      <TextField
        sx={{ width: "100%" }}
        type="date"
        name="startDate"
        value={formatDate(startDate)}
        onChange={handleChange}
      />
      <TextField
        sx={{ width: "100%" }}
        type="date"
        name="endDate"
        value={formatDate(endDate)}
        onChange={handleChange}
      />
    </div>
  );
};

export default DateFilters;
