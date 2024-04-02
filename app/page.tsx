import Header from "@/app/ui/header";
import Image from "next/image";

export default function Home() {
  const liHTML = (
    <li className="flex justify-between h-10 mt-5">
      <div className="flex item-center items-center gap-4">
        {/* <span className="mr-4">1</span> */}
        <span>1</span>
        <Image src="/samsung.png" width={40} height={40} alt="samsung" className="rounded-full" />
        <div className="flex flex-col">
          <span>삼성전자</span>
          <span className="text-slate-500 text-sm font-light">005930</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-red-500 text-sm">85,000</span>
        <span className="font-light text-red-500 text-xs">+3.66%</span>
      </div>
    </li>
  );

  return (
    <>
      <Header />
      <main className="max-w-5xl w-full h-[65rem] mt-10">
        <div className="flex">
          <section className="border w-1/2 p-4">
            <h2 className="text-xl font-semibold pb-4">실시간 거래량</h2>
            <ol>{new Array(10).fill(0).map((_) => liHTML)}</ol>
          </section>

          <section className="border w-1/2 p-4">
            <h2 className="text-xl font-semibold pb-4">인기 급상승</h2>
            <ol>{new Array(10).fill(0).map((_) => liHTML)}</ol>
          </section>
        </div>
      </main>
      <footer className="w-full h-[10rem] flex justify-center items-center bg-slate-50 text-slate-500 text-sm">
        © 2024 stock mate
      </footer>
    </>
  );
}
