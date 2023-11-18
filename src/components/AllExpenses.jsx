import React from "react";
import SingleExpense from "./SingleExpense";
import { motion } from "framer-motion";
import useResize from "../utils/useResize";

const AllExpenses = ({ expenses, onEditClick, onDeleteClick }) => {
  const size = useResize();
  return (
    <ul
      className={`grid w-full gap-8 ${size.width > 992 ? "grid-cols-2" : ""}`}
    >
      {expenses.map((expense, index) => {
        const { _id } = expense;
        const animationVariants = {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
        return (
          <motion.li
            key={_id}
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            transition={{
              ease: "linear",
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <SingleExpense
              expense={expense}
              onEdit={() => onEditClick(expense)}
              onDelete={() => onDeleteClick(expense)}
            />
          </motion.li>
        );
      })}
    </ul>
  );
};

export default AllExpenses;
