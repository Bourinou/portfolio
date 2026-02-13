'use client';
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);  // false = fermé

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);  // Inverse état

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Bourinou</span>
          </div>
          
          {/* Desktop : Visible large écran */}
          <ul className="nav-menu hidden lg:flex gap-8">
            <li><Link href="/#accueil" className="nav-link" onClick={() => setIsMobileOpen(false)}>Accueil</Link></li>
            <li><Link href="/#a-propos" className="nav-link" onClick={() => setIsMobileOpen(false)}>À propos</Link></li>
            <li><Link href="/#compétences" className="nav-link" onClick={() => setIsMobileOpen(false)}>Compétences</Link></li>
            <li><Link href="/#formation" className="nav-link" onClick={() => setIsMobileOpen(false)}>Formation</Link></li>
            <li><Link href="/#projets" className="nav-link" onClick={() => setIsMobileOpen(false)}>Projets</Link></li>
            <li><Link href="/#passions" className="nav-link" onClick={() => setIsMobileOpen(false)}>Passions</Link></li>
            <li><Link href="/#contacts" className="nav-link" onClick={() => setIsMobileOpen(false)}>Contact</Link></li>
          </ul>

          {/* Hamburger : Clic ouvre/ferme */}
          <div className="hamburger lg:hidden" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu : Slide gauche/droite selon isMobileOpen */}
      <ul className={`nav-menu lg:hidden fixed left-0 top-20 w-full bg-white/98 backdrop-blur-xl shadow-lg transition-transform duration-300 ${
        isMobileOpen ? 'translate-x-0' : '-translate-x-full'
      } flex flex-col items-center py-8 gap-6 z-50`}>
        <li><Link href="/#accueil" className="nav-link py-3 text-xl" onClick={() => setIsMobileOpen(false)}>Accueil</Link></li>
        <li><Link href="/#a-propos" className="nav-link py-3 text-xl" onClick={() => setIsMobileOpen(false)}>À propos</Link></li>
        <li><Link href="/#compétences" className="nav-link py-3 text-xl" onClick={() => setIsMobileOpen(false)}>Compétences</Link></li>
        <li><Link href="/#formation" className="nav-link py-3 text-xl" onClick={() => setIsMobileOpen(false)}>Formation</Link></li>
        <li><Link href="/#projets" className="nav-link py-3 text-xl" onClick={() => setIsMobileOpen(false)}>Projets</Link></li>
        <li><Link href="/#passions" className="nav-link py-3 text-xl" onClick={() => setIsMobileOpen(false)}>Passions</Link></li>
        <li><Link href="/#contacts" className="nav-link py-3 text-xl" onClick={() => setIsMobileOpen(false)}>Contact</Link></li>
      </ul>
    </>
  );
}
