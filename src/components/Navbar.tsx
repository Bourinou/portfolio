'use client';
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="barre-navigation">
        <div className="conteneur-nav">
          <Link href="/#accueil" onClick={() => setIsMenuOpen(false)}>
            <div className="logo-nav">
              <span className="texte-logo">Bourinou</span>
            </div>
          </Link>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><Link href="/#accueil" className="lien-nav" onClick={() => setIsMenuOpen(false)}>Accueil</Link></li>
            <li><Link href="/#a-propos" className="lien-nav" onClick={() => setIsMenuOpen(false)}>À propos</Link></li>
            <li><Link href="/#compétences" className="lien-nav" onClick={() => setIsMenuOpen(false)}>Compétences</Link></li>
            <li><Link href="/#formation" className="lien-nav" onClick={() => setIsMenuOpen(false)}>Formation</Link></li>
            <li><Link href="/#projets" className="lien-nav" onClick={() => setIsMenuOpen(false)}>Projets</Link></li>
            <li><Link href="/#passions" className="lien-nav" onClick={() => setIsMenuOpen(false)}>Passions</Link></li>
            <li><Link href="/#contacts" className="lien-nav" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>

          <div
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            id="hamburger"
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </>
  );
}
