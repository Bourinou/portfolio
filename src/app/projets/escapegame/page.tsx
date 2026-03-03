import { Metadata } from "next";
import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Escape Game",
  description: "Escape Game : Premier site de première année.",
};


export default function EscapeGame() {
  return (
    <section className="projet">
      <h2 className="titre-section">Site Web Escape Game</h2>
      <p className="periode">2024</p>
      <div className="contenu-a-propos">
        <div className="details-projet">
          <div className="carte">
            <h3>💡 Mes Premiers Pas</h3>
            <p className="description-a-propos">
              Ce projet de site "Escape Game" marque le tout début de mon parcours en BUT Informatique.
              Il s'agissait du premier véritable site que j'ai eu à réaliser, avec pour seule consigne
              d'utiliser uniquement du HTML et du CSS.
              L'objectif n'était pas de créer un système de jeu complexe, mais d'apprendre à structurer
              une page web et à la styliser proprement.
              J'ai dû faire preuve d'imagination pour simuler une ambiance d'enquête avec des moyens
              techniques limités mais fondamentaux.
            </p>
          </div>

          <div className="carte">
            <h3>🎨 HTML & CSS Pur</h3>
            <p className="description-a-propos">
              Contrairement à des projets plus récents, ici, pas de JavaScript, pas de Framework, pas de
              Base de données.
              Tout repose sur la structure HTML5 sémantique et les feuilles de style CSS3.
              J'ai appris à maîtriser les sélecteurs, le positionnement (flexbox), et à gérer les liens
              entre les différentes pages pour créer une navigation fluide qui simule l'avancée dans un
              jeu.
              C'était l'exercice idéal pour comprendre les bases du web : comment le navigateur interprète
              le code et comment rendre une page visuellement cohérente.
            </p>
          </div>

          <div className="carte">
            <h3>🎓 Apprentissage Fondamental</h3>
            <p className="description-a-propos">
              Ce projet, bien que simple techniquement avec le recul, a été crucial. Il m'a permis de
              valider mes acquis de base.
              J'ai compris l'importance de l'organisation des fichiers, de la structure du code et de la
              rigueur nécessaire pour écrire proprement.
              C'est sur ces fondations solides que j'ai pu ensuite construire des compétences plus
              avancées.
              Il reste un bon souvenir de mes débuts, prouvant qu'on peut faire quelque chose de plus ou
              moins sympa
              visuellement juste avec les langages standards du web.
            </p>
          </div>

          <ul className="liste-projets">
            <li>HTML5, CSS3 : animations, responsive, transitions</li>
            <li>Création d’énigmes et parcours utilisateur interactif</li>
            <li>Ambiance graphique pensée pour l’immersion</li>
          </ul>
          <a className="bouton-action" href="https://bourinou.github.io/escapegame/" target="_blank">Voir le site <FaExternalLinkAlt /></a>
        </div>
      </div>
      <div className="etiquettes">
        <span className="etiquette">Web</span>
        <span className="etiquette">Statique</span>
        <span className="etiquette">UX</span>
      </div>
    </section>
  );
}