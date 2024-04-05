import Logo from "@/app/ui/logo";
import { getSuggestions } from "../lib/stocks";
import SearchWrapper from "@/app/ui/search/search-wrapper";

const Header = async ({ query }: { query: string }) => {
  const suggestions = (await getSuggestions(query)) || [];

  return (
    <header className="max-w-5xl w-full flex flex-row justify-between mt-4">
      <div className="basis-1/4">
        <Logo />
      </div>
      <div className="flex flex-col	basis-3/4 border">
        <SearchWrapper suggestions={suggestions} />
      </div>
    </header>
  );
};

export default Header;
