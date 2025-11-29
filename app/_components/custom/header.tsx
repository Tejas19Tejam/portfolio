"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { Menu, X, Download } from "lucide-react";
import Navigation from "./navigation";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadResume = () => {
    // Add resume download functionality
    window.open("/docs/resume.pdf", "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-20">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
              VT
            </div>
            <span className="text-xl font-poppins font-semibold hidden sm:block">
              Vasudev Tejam
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation />
          </div>

          {/* Resume Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Button
              onClick={handleDownloadResume}
              className="hidden sm:flex items-center gap-2"
              variant="outline"
            >
              <Download size={16} />
              Resume
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              <a
                href="#about"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#experience"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#contact"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button
                onClick={handleDownloadResume}
                className="w-full flex items-center justify-center gap-2"
                variant="outline"
              >
                <Download size={16} />
                Download Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

// This is testing
