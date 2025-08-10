import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/default-user.jpg";
import { Button } from "@/app/_components/ui/button";

function Header() {
  return (
    <header className="flex flex-row  items-center px-8 py-3 max-w-7xl  w-full mx-auto border-b border-gray-100 shadow-xs">
      <Link href="/" className="flex items-center justify-center gap-4 z-10">
        <Image src={logo} alt="Vasudev Tejam Logo" height="50" width="50" />
        <span className="text-xl font-semibold text-primary-100">
          Vasudev Tejam
        </span>
      </Link>
      <Navigation />
      <Button>Resume</Button>
    </header>
  );
}

function NavigationLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      href={to}
      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/30 focus-visible:ring-[1px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-2 has-[>svg]:px-2.5"
    >
      <li className="text-sm font-medium ">{label}</li>
    </Link>
  );
}

function Navigation() {
  return (
    <nav className="flex-1">
      <ul className="flex gap-6 items-center justify-end px-8">
        <NavigationLink label="About Me" to="/" />
        <NavigationLink label="Skills" to="/" />
        <NavigationLink label="Experience" to="/" />
        <NavigationLink label="Projects" to="/" />
        <NavigationLink label="FAQ" to="/" />
        <NavigationLink label="Contacts" to="/" />
      </ul>
    </nav>
  );
}

export default Header;
