import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link className="flex flex-row items-center" href="/">
      <Image src="/logo-image.png" width={40} height={100} alt="logo image" className="mr-2" />
      <Image src="/logo-text.png" width={130} height={80} alt="logo text" />
    </Link>
  );
};

export default Logo;
