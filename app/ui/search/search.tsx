"use client";

import { useDebouncedCallback } from "use-debounce";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import GlobalContext from "@/app/global-context";

const Search = ({ suggestions }: { suggestions: { TICKER: string; COMNAME: string }[] }) => {
  const { setFocusIndex, focusIndex } = useContext(GlobalContext);
  const { replace } = useRouter();
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const [keyword, setKeyword] = useState(searchParam.get("query")?.toString() || "");

  useEffect(() => {
    setKeyword(searchParam.get("query")?.toString() || "");
  }, [searchParam.get("query")?.toString()]);
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParam);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  // const handleKeyboard = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   console.log(e.key);
  //   e.preventDefault();
  //   if (e.key === "ArrowDown") {
  //     if (focusIndex === suggestions.length - 1) {
  //       setFocusIndex(0);
  //     } else {
  //       setFocusIndex((prevIndex) => prevIndex + 1);
  //     }
  //   } else if (e.key === "ArrowUp") {
  //     if (focusIndex === 0) {
  //       setFocusIndex(suggestions.length - 1);
  //     } else {
  //       setFocusIndex((prevIndex) => prevIndex - 1);
  //     }
  //   } else if (e.key === "Enter") {
  //     e.preventDefault();
  //     if (focusIndex < 0) return;
  //     replace(`/stocks/${suggestions[focusIndex].TICKER}`);
  //   } else if (e.key === "Backspace") {
  //     setKeyword((prevKeyword) => prevKeyword.slice(0, -1));
  //   }
  //   // } else {
  //   //   setKeyword((prevKeyword) => prevKeyword + e.key);
  //   // }
  // };

  return (
    <form className="flex flex-row basis-3/4">
      <input
        type="search"
        placeholder="🔍 종목명을 입력하세요"
        className="w-full p-2 outline-none"
        onChange={(e) => {
          handleSearch(e.target.value);
          setKeyword(e.target.value);
          setFocusIndex(-2);
        }}
        // onKeyDown={handleKeyboard}
        value={keyword}
        autoFocus
      />
      {/* <button type="submit">
        <MagnifyingGlassIcon className="text-slate-500 w-6 h-6 stroke-2 mr-2" />
      </button> */}
    </form>
  );
};

export default Search;
