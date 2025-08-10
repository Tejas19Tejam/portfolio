import NavigationLink from "./main-nav-link";

function Navigation() {
  return (
    <nav className="flex-1">
      <ul className="flex gap-2 items-center justify-end px-8">
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
export default Navigation;
