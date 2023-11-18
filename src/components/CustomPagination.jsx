import { Pagination } from "@mui/material";
import React from "react";
import useResize from "../utils/useResize";
const CustomPagination = ({ totalPages, page, onChange }) => {
  const size = useResize();
  return (
    <div>
      <Pagination
        count={totalPages}
        page={page}
        onChange={onChange}
        color="primary"
        showFirstButton
        showLastButton
        size={size.width > 767 ? "large" : "small"}
        shape="rounded"
        boundaryCount={2}
      />
    </div>
  );
};

export default CustomPagination;
