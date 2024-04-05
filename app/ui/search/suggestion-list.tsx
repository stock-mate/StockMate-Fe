"use client";

import { useContext } from "react";
import Link from "next/link";
import GlobalContext from "@/app/global-context";

const SuggestionList = ({
  suggestions,
}: {
  suggestions: { TICKER: string; COMNAME: string }[];
}) => {
  const { isSearchFocus, focusIndex } = useContext(GlobalContext);
  const suggestionsHTML = suggestions?.map(({ TICKER, COMNAME }, index) => (
    <li key={`${TICKER}_${COMNAME}`}>
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
        <ul className="absolute top-[3.6rem] bg-white w-[48rem] max-h-96 overflow-y-auto shadow-xl">
          {suggestionsHTML}
        </ul>
      )}
    </>
  );
};

export default SuggestionList;
