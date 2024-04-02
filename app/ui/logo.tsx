import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link className="flex flex-row items-center" href="/">
      <Image src="/logo-image.png" width={40} height={100} alt="logo" className="mr-2" />
      <Image src="/logo-text.png" width={140} height={80} alt="logo" />
    </Link>
  );
};

export default Logo;
