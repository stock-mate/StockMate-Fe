"use client";

import { useState, createContext, Dispatch, SetStateAction } from "react";

type GlobalContextType = {
  isSearchFocus: boolean;
  setIsSearchFocus: Dispatch<SetStateAction<boolean>>;
};

const Context: GlobalContextType = {
  isSearchFocus: false,
  setIsSearchFocus: () => {
    throw new Error();
  },
};

export const GlobalContext = createContext(Context);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [isSearchFocus, setIsSearchFocus] = useState(false);

  const contextValue = {
    isSearchFocus,
    setIsSearchFocus,
  };

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
}

export default GlobalContext;
