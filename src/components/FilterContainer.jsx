import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useExpenseContext } from "../context/expenseContext";
import { clearAllFilters, getAllFilters } from "../action/expenseAction";

const FilterContainer = () => {
  const { dispatch, filters } = useExpenseContext();
  const { title, type, typeOptions, sort, sortOptions } = filters;

  const handleChange = (e) => {
    const { name, value } = e.target;

    const data = {
      ...filters,
      [name]: value,
    };
    getAllFilters(dispatch, data);
  };

  const clearAll = () => {
    clearAllFilters(dispatch);
  };
  return (
    <div className="rounded-xl border border-dark bg-transparent p-4 text-white shadow-lg shadow-white-a backdrop-blur-md">
      <h2 className="mb-4 text-sm font-bold tracking-wider sm:text-xl">
        Filter
      </h2>
      <form className="form grid grid-cols-2 gap-4 lg:grid-cols-4">
        <TextField
          name="title"
          label="Title"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <FormControl>
          <InputLabel htmlFor="type">Type</InputLabel>
          <Select name="type" value={type} onChange={handleChange} label="Type">
            {typeOptions.map((menu, index) => (
              <MenuItem key={index} value={menu}>
                {menu}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="sort">Sort</InputLabel>
          <Select name="sort" value={sort} onChange={handleChange} label="Sort">
            {sortOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <button
          type="button"
          className="rounded-md bg-slate-400 text-sm tracking-wider text-white transition duration-500 ease-in-out hover:bg-dark"
          onClick={clearAll}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default FilterContainer;
