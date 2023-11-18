import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addExpense, editExpense } from "../../action/expenseAction";
import { useExpenseContext } from "../../context/expenseContext";
import { menuLists } from "../../constants";
import { useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { formatDate } from "../../utils/helpers";
import { TbCurrencyDong } from "react-icons/tb";
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
const AddPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const isAddMode = !id;
  const { dispatch, expenses } = useExpenseContext();

  const expenseEditData = JSON.parse(localStorage.getItem("editedExpenseData"));

  const expenseEdit =
    expenses.find((expense) => expense._id === id) || expenseEditData;

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(4, "Title must be of minimum 4 characters")
      .max(20, "Title must be of maximum 20 characters")
      .required("Title is required!"),
    amount: Yup.number()
      .min(100, "Amount must be of minimum 100 VND ")
      .required("Amount is required!"),
    type: Yup.string(),
    desc: Yup.string()
      .min(4, "Description must be of minimum 4 characters")
      .max(20, "Description must be of maximum 20 characters")
      .required("Description is required!"),
    date: Yup.date(),
  });

  const formik = useFormik({
    initialValues: isAddMode
      ? {
          title: "",
          amount: "",
          type: "Expense",
          desc: "",
          date: formatDate(Date.now()),
        }
      : expenseEdit,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      if (isAddMode) {
        addExpense(dispatch, values);
      } else {
        editExpense(dispatch, values);
      }
      setTimeout(() => {
        navigate("/dashboard/all-expenses");
      }, 2000);
    },
  });

  useEffect(() => {
    if (!isAddMode) {
      localStorage.setItem("editedExpenseData", JSON.stringify(formik.values));
    }
  }, [formik.values]);

  return (
    <div className="flex flex-col gap-6 px-2">
      <h2
        className={`flex h-[60px] items-center text-2xl font-bold tracking-wider ${
          isAddMode ? "text-sky-600" : "text-emerald-600"
        }`}
      >
        {isAddMode ? "ADD EXPENSE" : "EDIT EXPENSE"}
      </h2>

      <form
        onSubmit={formik.handleSubmit}
        className="grid gap-6 rounded-xl border border-white-a bg-transparent p-9 shadow-box shadow-cyan-900 backdrop-blur-lg sm:grid-cols-3"
      >
        <div className="h-[80px] w-full">
          <TextField
            sx={{ width: "100%" }}
            id="title"
            name="title"
            label="Title"
            value={formik.values?.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </div>
        <div className="h-[80px] w-full">
          <TextField
            sx={{ width: "100%" }}
            id="amount"
            name="amount"
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  <TbCurrencyDong />
                </InputAdornment>
              ),
            }}
            value={formik.values?.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
          />
        </div>
        <div className="h-[80px] w-full">
          <FormControl sx={{ width: "100%" }}>
            <InputLabel htmlFor="type">Type</InputLabel>
            <Select
              name="type"
              label="Type"
              value={formik.values?.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.type && Boolean(formik.errors.type)}
            >
              {menuLists.map((menu) => (
                <MenuItem key={menu.id} value={menu.value}>
                  {menu.text}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.type && formik.errors.type && (
              <FormHelperText error>{formik.errors.type}</FormHelperText>
            )}
          </FormControl>
        </div>

        <div className="h-[80px] w-full">
          <TextField
            sx={{ width: "100%" }}
            id="desc"
            name="desc"
            label="Description"
            value={formik.values?.desc}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.desc && Boolean(formik.errors.desc)}
            helperText={formik.touched.desc && formik.errors.desc}
          />
        </div>
        <div className="h-[80px] w-full">
          <TextField
            sx={{ width: "100%" }}
            id="date"
            name="date"
            type="date"
            value={formatDate(formik.values?.date)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
          />
        </div>
        <div className="flex h-[80px] w-full flex-row gap-2 font-bold tracking-wider">
          <button
            type="submit"
            className={`flex h-[56px] w-full items-center justify-center gap-2  rounded-xl text-white transition-all duration-200 ease-linear ${
              isAddMode
                ? "bg-sky-600  hover:bg-sky-900"
                : "bg-emerald-600 hover:bg-emerald-800"
            } `}
          >
            {isSubmitting && (
              <CircularProgress size={18} sx={{ color: "#fff" }} />
            )}
            {isAddMode ? "Add Expense" : "Edit Expense"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
