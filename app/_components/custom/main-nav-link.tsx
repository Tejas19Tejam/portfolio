import Link from "next/link";
import { Button } from "@/app/_components/ui/button";

function NavigationLink({ to, label }: { to: string; label: string }) {
  return (
    <Button variant="ghost" asChild>
      <Link href={to}>
        <li className="text-sm font-medium ">{label}</li>
      </Link>
    </Button>
  );
}

export default NavigationLink;
