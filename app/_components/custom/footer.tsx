"use client";

import { Heart, ArrowUp } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                VT
              </div>
              <span className="text-xl font-poppins font-semibold">
                Vasudev Tejam
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Full Stack Developer passionate about creating exceptional web
              experiences with modern technologies. Let&apos;s build something
              amazing together.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with <Heart size={14} className="text-red-500 mx-1" /> and
              lots of ☕️
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>
                <a
                  href="mailto:tejas19tejam@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  tejas19tejam@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+918080187131"
                  className="hover:text-primary transition-colors"
                >
                  +91 80801 87131
                </a>
              </div>
              <div>Mumbai, India</div>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="mt-4 flex items-center gap-2 px-3 py-1.5 text-sm border border-border rounded-md bg-background hover:bg-muted transition-colors"
            >
              <ArrowUp size={14} />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Vasudev Tejam. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
