import { useState } from "react";
import Container from "../components/Container";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="site-nav">
      <Container>
        <div className="nav-inner">

          <a className="brand" href="#home" onClick={closeMenu}>Nirav.</a>

          <ul className="desktop-nav d-none d-md-flex">
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>

            <li>
              <a href="#current-work" onClick={closeMenu}>
                Current work
              </a>
            </li>

            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="mobile-menu-button d-md-none" type="button" aria-label="Toggle navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
              <span />
              <span />
              <span />
            </button>
          </div>

        </div>
        {menuOpen && <ul className="mobile-menu d-md-none list-unstyled m-0 pb-3 text-[#52606d]">
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#current-work" onClick={closeMenu}>Current work</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>}
      </Container>
    </nav>
  );
};

export default Navbar;