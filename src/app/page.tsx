import APropos from "@/app/page_accueil/a-propos";
import Compétences from "@/app/page_accueil/compétences";
import Formation from "@/app/page_accueil/formation";
import Projets from "@/app/page_accueil/projets";
import Passions from "@/app/page_accueil/passions";
import Contacts from "@/app/page_accueil/contacts";
import "@/app/page_accueil/page_accueil.css";

export default function Home() {
  return (
    <>
      <section className="hero" id="accueil">
        <div className="hero-container">
          <div>
            <h1 className="hero-name" data-text="Dimitri PAPE">Dimitri PAPE</h1>
            <div className="hero-details">
              <p className="hero-age"><span id="age"> ans</span></p>
              <p className="hero-title">Étudiant en BUT Informatique</p>
              <p className="hero-subtitle">Passionné de développement web et de technologies innovantes</p>
            </div>
            <div className="hero-cta">
              <a className="cta-button" href="#a-propos">Découvrir mon profil</a>
              <a className="cta-button cta-secondary" href="#contacts">Me contacter</a>
            </div>
          </div>
        </div>
      </section>
      <APropos />
      <Compétences />
      <Formation />
      <Projets />
      <Passions />
      <Contacts />
    </>
  );
}
