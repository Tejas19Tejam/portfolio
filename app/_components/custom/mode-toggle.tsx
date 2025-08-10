"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function handleToggleMode() {
    if (resolvedTheme === "dark") {
      setTheme("light");
    }
    if (resolvedTheme === "light") {
      setTheme("dark");
    }
  }

  return (
    <div className="fixed bottom-2 right-2 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={handleToggleMode}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </Button>

      <span className="sr-only">Toggle theme</span>
    </div>
  );
}

export default ModeToggle;
