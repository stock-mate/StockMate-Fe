import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { archivo } from "@/app/ui/font";

export default function Home() {
  return (
    <>
      <header className="max-w-5xl w-full flex flex-row justify-between">
        <div className="basis-1/4">
          <Link className="flex flex-row items-center" href="/">
            <Image src="/logo.png" width={40} height={30} alt="logo" />
            {/* <svg height="32" role="separator" viewBox="0 0 32 32" width="32">
              <path
                d="M22 5L9 28"
                stroke="#eaeaea"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg> */}
            <span className={`${archivo.variable} font-semibold text-2xl ml-2`}>stock mate</span>
          </Link>
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
      <main className="max-w-5xl w-full border min-h-screen"></main>
    </>
  );
}
