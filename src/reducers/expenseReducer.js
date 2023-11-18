import { toast } from "react-toastify";
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
} from "../action/action";

const expenseReducer = (state, action) => {
  switch (action.type) {
    case FETCH_EXPENSES_BEGIN:
      return {
        ...state,
        expensesLoading: true,
      };
    case FETCH_EXPENSES_SUCCESS:
      return {
        ...state,
        expensesLoading: false,
        expenses: action.payload.expenses,
        totalPages: action.payload.totalPages,
      };
    case FETCH_EXPENSES_ERROR:
      return {
        ...state,
        expensesLoading: false,
        expenseError: true,
      };
    case ADD_EXPENSE:
      const newExpenses = state.expenses.slice();
      newExpenses.push(action.payload);
      toast.success("Expense added...");
      return {
        ...state,
        expenses: newExpenses,
      };
    case EDIT_EXPENSE:
      const editExpense = action.payload;
      const cloneExpenses = state.expenses.slice();
      const editIndex = cloneExpenses.findIndex(
        (expense) => expense._id === editExpense._id,
      );

      if (editIndex > 0) {
        cloneExpenses[editIndex] = editExpense;
      }
      toast.success("Expense edited...");
      return {
        ...state,
        expenses: cloneExpenses,
      };
    case DELETE_EXPENSE:
      const removeId = action.payload;
      const finalExpenses = state.expenses.filter(
        (expense) => expense._id !== removeId,
      );
      toast.success("Item deleted !");
      return {
        ...state,
        expenses: finalExpenses,
      };
    case GET_ALL_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    case CLEAR_ALL_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          title: "",
          type: "All",
          sort: "Latest",
        },
        page: 1,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case GET_REPORT:
      return {
        ...state,
        report: action.payload,
      };
    case GET_DATE:
      return {
        ...state,
        date: {
          ...state.date,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default expenseReducer;
