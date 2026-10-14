import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "404",
  description: "Page non trouvée.",
};

export default function NotFound() {
  return (
    <section className="banniere">
      <div className="conteneur-banniere">
        <div>
          <Image src="/miku/miku-poireaux.gif" alt="" width={498} height={498} unoptimized className="gif-404" />
          <h1 className="nom-banniere">404</h1>
          <div className="details-banniere">
            <p className="sous-titre-banniere">Page non trouvée.</p>
            <Link className="bouton-action" href="/">Retour à l&apos;accueil</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
