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
      <section className="banniere" id="accueil">
        <div className="conteneur-banniere">
          <div>
            <h1 className="nom-banniere" data-text="Dimitri PAPE">Dimitri PAPE</h1>
            <div className="details-banniere">
              <p className="age-banniere"><span id="age"> ans</span></p>
              <p className="titre-banniere">Étudiant en BUT Informatique</p>
              <p className="sous-titre-banniere">Passionné de développement web et de technologies innovantes</p>
            </div>
            <div className="actions-banniere">
              <a className="bouton-action" href="#a-propos">Découvrir mon profil</a>
              <a className="bouton-action bouton-secondaire" href="#contacts">Me contacter</a>
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
