import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav">
        <a className="brand" href="#top" aria-label="Gamefreak home">
          <span className="brand-mark">G</span>
          <span>Gamefreak</span>
        </a>

        <div className="nav-links">
          {navigation.map((item) => (
            <a href={item.href} key={item.name}>
              {item.name}
            </a>
          ))}
        </div>

        <a className="nav-contact" href="#contact">
          Let&apos;s talk
          <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}
