import React, { useEffect, useState } from "react";

const useResize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size;
};
export default useResize;
