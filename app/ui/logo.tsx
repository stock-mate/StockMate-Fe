import Link from "next/link";
import Image from "next/image";
import { archivo } from "@/app/ui/font";

const Logo = () => {
  return (
    <Link className="flex flex-row items-center" href="/">
      <Image src="/logo.png" width={40} height={30} alt="logo" />
      <span className={`${archivo.variable} font-semibold text-2xl ml-2`}>stock mate</span>
    </Link>
  );
};

export default Logo;
