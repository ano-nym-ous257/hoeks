import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav editorial-nav">
        <a className="brand editorial-brand" href="#top" aria-label="Gamefreak home">
          <span className="brand-mark">G</span>

          <span className="brand-copy">
            <strong>Gamefreak</strong>
            <small>Secure systems & software</small>
          </span>
        </a>

        <div className="nav-links">
          {navigation.map((item) => (
            <a href={item.href} key={item.name}>
              {item.name}
            </a>
          ))}
        </div>

        <a className="nav-contact editorial-contact" href="#contact">
          Contact
          <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}
