import Image from 'next/image';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeu de Cartes Pokémon",
  description: "Jeu de Cartes Pokémon : Application de jeu interactive basée sur les règles Pokémon un peu modifiées.",
};


export default function PokemonGame() {
  return (
    <section className="projet">
      <h2 className="titre-section">Jeu de Cartes Pokémon</h2>
      <p className="periode">2024</p>
      <div className="contenu-a-propos">
        <div className="details-projet">
          <div className="carte">
            <h3>🎮 Un Duel Stratégique</h3>
            <p className="description-a-propos">
              Ce projet a pour but de recréer l'expérience captivante du célèbre jeu de cartes Pokémon
              dans une version numérique interactive.
              L'objectif était de concevoir une application ludique où deux joueurs peuvent s'affronter,
              déployer leurs stratégies et gérer leurs ressources (énergie, cartes) pour remporter la
              victoire.
              Au-delà du code, c'est avant tout un travail de game design : penser l'interface pour
              qu'elle soit intuitive, fluide et fidèle à l'esprit du jeu original.
              L'immersion est renforcée par une interface graphique soignée utilisant JavaFX, rendant
              chaque action (attaque, pioche) visuellement satisfaisante.
            </p>
          </div>

          <div className="carte">
            <h3>⚡ Moteur de Jeu & JavaFX</h3>
            <p className="description-a-propos">
              J'ai implémenté un moteur de jeu complet à partir d'une base donnée respectant les règles
              officielles simplifiées :
              gestion des tours, calcul des dégâts selon les types (Eau, Feu, Plante, etc.), et conditions
              de victoire.
              L'interface propose une visualisation claire du plateau de jeu, avec les mains des joueurs,
              la zone de combat, les énergies et les cartes Pokémon.
              La gestion des événements utilisateurs a demandé une logique
              précise pour éviter les actions illégales durant le tour adverse ou les erreurs.
            </p>
          </div>

          <div className="carte">
            <h3>🏆 Architecture & Programmation Objet</h3>
            <p className="description-a-propos">
              Développé entièrement en Java, ce projet a été le terrain de jeu idéal pour mettre en
              pratique les concepts avancés de la Programmation Orientée Objet (POO).
              L'architecture repose sur une utilisation intensive de l'héritage et du polymorphisme pour
              gérer les différents types de cartes (Pokémon, Énergie, Dresseur) et leurs spécificités.
              La rigueur du typage fort de Java a permis de construire un système robuste, capable de
              gérer les règles complexes d'un jeu de cartes sans effets de bord inattendus.
              C'est une réalisation qui m'a fait progresser significativement dans la conception
              logicielle et la compréhension des mécanismes profonds du langage.
            </p>
          </div>

          <ul className="liste-projets">
            <li>Moteur de jeu inspiré des règles Pokémon</li>
            <li>Gestion des cartes, points de vie, effets et attaques</li>
            <li>Interface graphique moderne et interactive</li>
          </ul>
        </div>

        <div className="galerie-projet">
          <div className="item-galerie">
            <Image
              alt="Interface de connexion du jeu Pokémon"
              loading="lazy"
              src="/images/pokemon_accueil.jpg"
              width={600}
              height={400}
            />
            <div className="legende-galerie">Écran d'accueil et connexion</div>
          </div>
          <div className="item-galerie">
            <Image
              alt="Plateau de jeu Pokémon en combat"
              loading="lazy"
              src="/images/pokemon_plateau.png"
              width={600}
              height={400}
            />
            <div className="legende-galerie">Plateau de jeu interactif</div>
          </div>
        </div>
      </div>
      <div className="etiquettes">
        <span className="etiquette">Java</span>
        <span className="etiquette">JavaFX</span>
        <span className="etiquette">Jeu</span>
      </div>
    </section>
  );
}