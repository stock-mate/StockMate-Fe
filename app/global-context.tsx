"use client";

import { useState, createContext, Dispatch, SetStateAction } from "react";

type GlobalContextType = {
  isSearchFocus: boolean;
  setIsSearchFocus: Dispatch<SetStateAction<boolean>>;
  focusIndex: number;
  setFocusIndex: Dispatch<SetStateAction<number>>;
};

const Context: GlobalContextType = {
  isSearchFocus: false,
  setIsSearchFocus: () => {
    throw new Error();
  },
  focusIndex: 0,
  setFocusIndex: () => {
    throw new Error();
  },
};

export const GlobalContext = createContext(Context);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [focusIndex, setFocusIndex] = useState(-2);

  const contextValue = {
    isSearchFocus,
    setIsSearchFocus,
    focusIndex,
    setFocusIndex,
  };

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
}

export default GlobalContext;
