"use client";

import { createContext } from "react";

const Context = createContext({ test: "abc" });

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const test = "abc";

  const contextValue = {
    test,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Context;
