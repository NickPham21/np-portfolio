const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function NavBar() {
  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li key={link.path}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;