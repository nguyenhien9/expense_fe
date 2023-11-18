import React, { useEffect } from "react";
import { useExpenseContext } from "../../context/expenseContext";
import {
  deleteExpense,
  fetchExpenses,
  getPageValue,
} from "../../action/expenseAction";
import {
  AllExpenses,
  CustomPagination,
  FilterContainer,
  Loading,
} from "../../components";
import { useNavigate } from "react-router-dom";
const ExpensesPage = () => {
  const navigate = useNavigate();
  const { dispatch, expenses, expensesLoading, filters, page, totalPages } =
    useExpenseContext();

  const handleEditExpense = (expense) => {
    navigate(`/dashboard/${expense._id}`);
  };
  const handleDeleteExpense = (expense) => {
    const removeId = expense._id;
    deleteExpense(dispatch, removeId, filters, page);
  };

  const handleChangePage = (e, value) => {
    getPageValue(dispatch, value);
  };
  useEffect(() => {
    fetchExpenses(dispatch, filters, page);
  }, [page, filters]);

  return (
    <div className="flex h-full flex-col gap-8 px-2">
      <FilterContainer />
      <div className=" flex h-full flex-1 flex-col gap-9">
        {expensesLoading ? (
          <div className="flex justify-center ">
            <Loading />
          </div>
        ) : expenses.length === 0 ? (
          <h1 className="text-xl text-white">No expenses left</h1>
        ) : (
          <AllExpenses
            expenses={expenses}
            onEditClick={handleEditExpense}
            onDeleteClick={handleDeleteExpense}
          />
        )}
      </div>
      <div className="mb-5 flex items-center justify-end">
        <CustomPagination
          totalPages={totalPages}
          page={page}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default ExpensesPage;
