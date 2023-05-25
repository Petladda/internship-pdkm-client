"use client";

import { useState, createContext } from "react";

const initialState = {
  first: 0,
};

export const LineLiffContext = createContext({
  first: initialState,
});

export const LineliffContextProvider = ({ children }) => {
  const [first, setfirst] = useState();
  return (
    <LineLiffContext.Provider value={{ first }}>
      {children}
    </LineLiffContext.Provider>
  );
};
