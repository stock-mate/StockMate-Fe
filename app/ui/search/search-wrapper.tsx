"use client";

import Search from "@/app/ui/search/search";
import SuggestionList from "@/app/ui/search/suggestion-list";
import { useContext, useRef, useEffect } from "react";
import GlobalContext from "@/app/global-context";

const SearchWrapper = ({ suggestions }: { suggestions: { TICKER: string; COMNAME: string }[] }) => {
  const { setIsSearchFocus, isSearchFocus } = useContext(GlobalContext);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClose = (e: any) => {
      if (isSearchFocus && ref.current && !ref.current.contains(e.target)) {
        setIsSearchFocus(false);
      }
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [isSearchFocus]);

  return (
    <div ref={ref} onClick={() => setIsSearchFocus((prev) => !prev)}>
      <Search />
      <SuggestionList suggestions={suggestions} />
    </div>
  );
};

export default SearchWrapper;
