import { Metadata } from "next";
import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Demos",
    description: "Demos : Application de vote en ligne.",
};

export default function Demos() {
    return (
        <section className="projet">
            <h2 className="titre-section">Site de Vote en Ligne (Demos)</h2>
            <p className="periode">2024-2025 (Semestre 3)</p>
            <div className="contenu-a-propos">
                <div className="details-projet">
                    <div className="carte">
                        <h3>🗳️ Un Système de Vote Complet</h3>
                        <p className="description-a-propos">
                            Ce projet, réalisé en groupe lors du semestre 3 du BUT Informatique, consiste en la création
                            d'une application web complète de vote en ligne baptisée "Demos".
                            L'objectif était de concevoir un système permettant aux utilisateurs de créer des questions,
                            d'y répondre et de consulter les résultats, le tout sécurisé via une authentification.
                            Nous avons mis un point d'honneur à soigner l'expérience utilisateur avec une interface
                            claire
                            et responsive.
                        </p>
                    </div>

                    <div className="carte">
                        <h3>🏗️ Architecture MVC & PHP</h3>
                        <p className="description-a-propos">
                            Le cœur de l'application repose sur une architecture MVC (Modèle-Vue-Contrôleur) stricte,
                            assurant une séparation nette entre la logique métier, l'accès aux données et l'affichage.
                            Développé en PHP sans framework, ce projet nous a permis de maîtriser les fondamentaux du
                            développement web dynamique : routage personnalisé, gestion de sessions, et interactions
                            avec
                            une base de données MySQL.
                            Le contrôleur frontal centralise toutes les requêtes, garantissant un code modulaire et
                            maintenable.
                        </p>
                    </div>

                    <div className="carte">
                        <h3>👥 Gestion des Utilisateurs et Questions</h3>
                        <p className="description-a-propos">
                            L'application gère différents rôles (utilisateurs, organisateurs) et offre des
                            fonctionnalités
                            avancées :
                            inscription et connexion sécurisées, création de questions avec dates de début et fin, et un
                            système de filtre pour rechercher des votes spécifiques.
                            La sécurité a été intégrée dès la conception pour protéger les données des utilisateurs et
                            l'intégrité des votes.
                        </p>
                    </div>

                    <ul className="liste-projets">
                        <li>Architecture MVC en PHP natif</li>
                        <li>Système d'authentification et de gestion de compte</li>
                        <li>Création, vote et consultation de résultats</li>
                        <li>Base de données MySQL</li>
                    </ul>
                </div>


                <div className="details-projet">
                    <a className="bouton-action"
                        href="https://webinfo.iutmontp.univ-montp2.fr/~cerisierr/demos/web/"
                        target="_blank">
                        Voir le site <FaExternalLinkAlt />
                    </a>
                </div>
            </div>
            <div className="etiquettes">
                <span className="etiquette">PHP</span>
                <span className="etiquette">MVC</span>
                <span className="etiquette">MySQL</span>
                <span className="etiquette">HTML/CSS</span>
            </div>
        </section>
    );
}