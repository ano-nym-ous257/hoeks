"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <nav className="container nav" aria-label="Primary navigation">
          <a className="nav-brand" href="#top" onClick={closeMenu}>
            <span>GF</span>
            <strong>Gamefreak</strong>
          </a>

          <div className="nav-links">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <a className="nav-contact" href="#contact">
            Let&apos;s talk
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <div
        className={`mobile-navigation ${
          menuOpen ? "mobile-navigation-open" : ""
        }`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        <div className="container mobile-navigation-inner">
          <span className="mobile-navigation-label">
            Navigation
          </span>

          <div className="mobile-navigation-links">
            {navigation.map((item, index) => (
              <a
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                <span>0{index + 1}</span>
                {item.label}
              </a>
            ))}

            <a href="#contact" onClick={closeMenu}>
              <span>06</span>
              Contact
            </a>
          </div>

          <div className="mobile-navigation-actions">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Open résumé
            </a>

            <a
              href="https://github.com/ano-nym-ous257"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/alex-agyei-81332a2b3/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
