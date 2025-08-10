import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/default-user.jpg";
import { Button } from "@/app/_components/ui/button";
import Navigation from "./navigation";

function Header() {
  return (
    <header className="flex flex-row  items-center px-8 py-3   w-full mx-auto border-b border-gray-100 dark:border-gray-800 shadow-xs">
      <Link href="/" className="flex items-center justify-center gap-4 z-10">
        <Image
          src={logo}
          alt="Vasudev Tejam Logo"
          height="40"
          width="40"
          className="rounded-full"
        />
        <span className="text-xl font-semibold text-primary-100">
          Vasudev Tejam
        </span>
      </Link>
      <Navigation />
      <Button>Resume</Button>
    </header>
  );
}

export default Header;
