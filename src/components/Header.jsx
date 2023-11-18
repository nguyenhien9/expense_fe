import React from "react";
import expense from "../assets/images/EXPENSE.png";

const Header = () => {
  return (
    <div className="flex h-[80px] w-full items-center px-6 py-5 sm:px-16">
      <img src={expense} alt="logo" className="w-[80px] object-cover" />
    </div>
  );
};

export default Header;
