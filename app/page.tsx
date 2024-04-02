import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="max-w-5xl w-full border flex flex-row">
        <div className="border">
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
            <span className="font-pretendard font-semibold text-2xl ml-2">stock mate</span>
          </Link>
        </div>
        <div className="basis-3/4 border">search</div>
      </header>
      <main className="max-w-5xl w-full border">main</main>
    </>
  );
}
