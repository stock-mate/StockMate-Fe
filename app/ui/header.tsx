import Logo from "@/app/ui/logo";
import Search from "@/app/ui/search";
import Link from "next/link";
import { getSuggestions } from "../lib/stocks";

const Header = async ({ query }: { query: string }) => {
  const suggestions = (await getSuggestions(query)) || [];

  const suggestionsHTML = suggestions?.map(
    ({ TICKER, COMNAME }: { TICKER: string; COMNAME: string }) => (
      <li key={`${TICKER}_${COMNAME}`}>
        <Link href={`/stocks/${TICKER}`} className="block p-2 border hover:bg-slate-100">
          {COMNAME}
        </Link>
      </li>
    )
  );

  return (
    <header className="max-w-5xl w-full flex flex-row justify-between mt-4">
      <div className="basis-1/4">
        <Logo />
      </div>
      <div className="flex flex-col	basis-3/4 border">
        <Search />
        {suggestions.length !== 0 && (
          <ul className="absolute top-[3.6rem] bg-white w-[48rem] max-h-96 overflow-y-auto shadow-xl">
            {suggestionsHTML}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
