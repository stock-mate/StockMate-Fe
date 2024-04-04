"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Search = () => {
  const { replace } = useRouter();
  const searchParam = useSearchParams();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParam);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  return (
    <form className="flex flex-row basis-3/4">
      <input
        type="search"
        placeholder="영문 종목명을 입력하세요"
        className="w-full p-2 outline-none"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button type="submit">
        <MagnifyingGlassIcon className="text-slate-500 w-6 h-6 stroke-2 mr-2" />
      </button>
    </form>
  );
};

export default Search;
