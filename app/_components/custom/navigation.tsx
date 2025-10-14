function Navigation() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
