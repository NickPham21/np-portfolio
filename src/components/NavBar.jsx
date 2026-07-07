function Navbar() {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
    ]

    return (
        <nav className="navbar">
            <ul className="nav-links">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a href={link.path}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;