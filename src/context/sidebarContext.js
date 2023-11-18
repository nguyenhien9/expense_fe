import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/sidebarReducer";
import { TOGGLE_SIDEBAR } from "../action/action";

const initState = {
  isSidebarOpen: false,
};

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  return (
    <SidebarContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
