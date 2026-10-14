import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pied-page">
      <div className="conteneur">
        <div className="signature-footer">
          <Image src="/miku/miku-couettes.webp" alt="" width={272} height={218} unoptimized className="gif-footer" />
          <span className="badge-techno">MADE WITH REACT &amp; NEXT.JS</span>
        </div>
        <p>&copy; 2025-2026 Dimitri PAPE. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
