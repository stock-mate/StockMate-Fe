import Image from "next/image";
import Link from "next/link";

const RankingItem = ({ idx }: { idx: number }) => {
  return (
    <li>
      <Link href="/stocks/SSNLF" className="flex justify-between h-10 mt-5">
        <div className="flex item-center items-center gap-4">
          <span className="w-4">{idx + 1}</span>
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
      </Link>
    </li>
  );
};

export default RankingItem;
