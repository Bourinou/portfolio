import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Page non trouvée.",
};

export default function NotFound() {
  return (
    <section className="banniere">
      <div className="conteneur-banniere">
        <div>
          <h1 className="nom-banniere" data-text="404">404</h1>
          <div className="details-banniere">
            <p className="sous-titre-banniere">Page non trouvée.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
