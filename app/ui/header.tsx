import Logo from "@/app/ui/logo";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="max-w-5xl w-full flex flex-row justify-between">
      <div className="basis-1/4">
        <Logo />
      </div>
      <form className="flex flex-row basis-3/4 border rounded-md overflow-hidden">
        <input
          type="search"
          placeholder="종목명 또는 코드를 입력해주세요"
          className="w-full p-2 outline-none"
        />
        <button type="submit">
          <MagnifyingGlassIcon className="text-slate-500 w-6 h-6 stroke-2 mr-2" />
        </button>
      </form>
    </header>
  );
};

export default Header;
