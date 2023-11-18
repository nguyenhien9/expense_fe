import {
  FETCH_EXPENSES_BEGIN,
  FETCH_EXPENSES_SUCCESS,
  FETCH_EXPENSES_ERROR,
  ADD_EXPENSE,
  EDIT_EXPENSE,
  DELETE_EXPENSE,
  GET_ALL_FILTERS,
  CLEAR_ALL_FILTERS,
  CHANGE_PAGE,
  GET_REPORT,
  GET_DATE,
} from "./action";
import { expenseApi } from "../api/expenseApi";
import axios from "axios";

export const getPageValue = async (dispatch, page) => {
  dispatch({ type: CHANGE_PAGE, payload: page });
};
export const getAllFilters = async (dispatch, filters) => {
  dispatch({ type: GET_ALL_FILTERS, payload: filters });
};
export const clearAllFilters = async (dispatch) => {
  dispatch({ type: CLEAR_ALL_FILTERS });
};
export const fetchExpenses = async (dispatch, filters, page) => {
  let url = `${expenseApi}?type=${filters.type}&sort=${filters.sort}&page=${page}`;
  if (filters.title) {
    url = url + `&title=${filters.title}`;
  }
  try {
    dispatch({ type: FETCH_EXPENSES_BEGIN });
    const res = await axios.get(url);

    dispatch({
      type: FETCH_EXPENSES_SUCCESS,
      payload: { expenses: res.data.expenses, totalPages: res.data.totalPages },
    });
  } catch (error) {
    dispatch({ type: FETCH_EXPENSES_ERROR, payload: error.message });
  }
};
export const addExpense = async (dispatch, data) => {
  try {
    const res = await axios.post(expenseApi, data);
    dispatch({ type: ADD_EXPENSE, payload: res.data });
    if (res.status === 201) {
      await fetchExpenses(dispatch);
    }
  } catch (error) {
    return error.message;
  }
};
export const editExpense = async (dispatch, data) => {
  try {
    const res = await axios.put(`${expenseApi}/${data._id}`, data);

    dispatch({ type: EDIT_EXPENSE, payload: res.data });
    if (res.status === 200) {
      await fetchExpenses(dispatch);
    }
  } catch (error) {
    return error.message;
  }
};
export const deleteExpense = async (dispatch, id, filters, page) => {
  try {
    await axios.delete(`${expenseApi}/${id}`);
    dispatch({ type: DELETE_EXPENSE, payload: id });
    await fetchExpenses(dispatch, filters, page);
  } catch (error) {
    return error.message;
  }
};

export const getDateFilters = async (dispatch, dateFilters) => {
  dispatch({ type: GET_DATE, payload: dateFilters });
};
export const getReportExpense = async (dispatch, date) => {
  let url = `${expenseApi}/report?startDate=${date.startDate}&endDate=${date.endDate}`;
  const res = await axios.get(url);
  dispatch({ type: GET_REPORT, payload: res.data });
};
