"use client";

import { useState, useEffect } from "react";
import Logo from "@/app/ui/logo";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebouncedCallback } from "use-debounce";
import { getSuggestions } from "@/app/lib/stocks";
// 여기서 검색하면 믿에 뜨게금..
// 검색어가 입력되면 디바운스 시작되야하고 데이터 fetch 해야함

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const [suggestion, setSuggestion] = useState<string[]>([]);

  const handleKeyword = useDebouncedCallback((newKeyword) => {
    console.log(newKeyword);
    setKeyword(newKeyword);
  }, 1000);

  useEffect(() => {
    // setSuggestion(["abc"]);
    if (!keyword) return;

    const fetchSuggestions = async (keyword: string) => {
      const data = await getSuggestions(keyword);
      console.log(data);
    };

    fetchSuggestions(keyword);
  }, [keyword]);

  return (
    <header className="max-w-5xl w-full flex flex-row justify-between mt-4">
      <div className="basis-1/4">
        <Logo />
      </div>
      <div className="flex flex-col	basis-3/4 border rounded-md overflow-hidden">
        <form className="flex flex-row basis-3/4 border rounded-md overflow-hidden">
          <input
            type="search"
            placeholder="영문 종목명을 입력하세요"
            className="w-full p-2 outline-none"
            onChange={(e) => handleKeyword(e.target.value)}
          />
          <button type="submit">
            <MagnifyingGlassIcon className="text-slate-500 w-6 h-6 stroke-2 mr-2" />
          </button>
        </form>

        <ul>
          <li className="p-2 border">abc</li>
          <li className="p-2 border">abc</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
