"use client";

import { useContext, useEffect, useRef } from "react";
import Link from "next/link";
import GlobalContext from "@/app/global-context";

const SuggestionList = ({
  suggestions,
}: {
  suggestions: { TICKER: string; COMNAME: string }[];
}) => {
  const scrollRef = useRef<HTMLLIElement | null>(null);
  const { isSearchFocus, focusIndex } = useContext(GlobalContext);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [focusIndex]);

  const suggestionsHTML = suggestions?.map(({ TICKER, COMNAME }, index) => (
    <li key={`${TICKER}_${COMNAME}`} ref={focusIndex === index ? scrollRef : undefined}>
      <Link
        href={`/stocks/${TICKER}`}
        className={`block p-2 border hover:bg-slate-100 ${focusIndex === index && "bg-slate-100"}`}
      >
        {COMNAME}
      </Link>
    </li>
  ));

  return (
    <>
      {isSearchFocus && (
        <ul className="absolute top-[3.6rem] bg-white w-[48rem] max-h-96 overflow-y-auto shadow-xl z-10">
          {suggestionsHTML}
        </ul>
      )}
    </>
  );
};

export default SuggestionList;
