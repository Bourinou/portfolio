import { Metadata } from "next";
import Image from 'next/image';

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
                        <h3>Un système de vote complet</h3>
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
                        <h3>Architecture MVC & PHP</h3>
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
                        <h3>Gestion des utilisateurs et des questions</h3>
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

                <div className="galerie-projet">
                    <div className="item-galerie">
                        <Image
                            alt="Page d'accueil de Demos (non connecté)"
                            loading="lazy"
                            src="/images/demos_welcome_page.png"
                            width={600}
                            height={400}
                            style={{ height: '220px', width: 'auto' }}
                        />
                        <div className="legende-galerie">Accueil (visiteur)</div>
                    </div>
                    <div className="item-galerie">
                        <Image
                            alt="Tableau de bord de l'administrateur"
                            loading="lazy"
                            src="/images/demos_welcome_page_admin.png"
                            width={600}
                            height={400}
                            style={{ height: '220px', width: 'auto' }}
                        />
                        <div className="legende-galerie">Accueil (administrateur)</div>
                    </div>
                    <div className="item-galerie">
                        <Image
                            alt="Consultation des questions de vote"
                            loading="lazy"
                            src="/images/demos_questions.png"
                            width={600}
                            height={400}
                            style={{ height: '220px', width: 'auto' }}
                        />
                        <div className="legende-galerie">Liste des questions</div>
                    </div>
                    <div className="item-galerie">
                        <Image
                            alt="Formulaire de création de question"
                            loading="lazy"
                            src="/images/demos_creation_questions.png"
                            width={600}
                            height={400}
                            style={{ height: '220px', width: 'auto' }}
                        />
                        <div className="legende-galerie">Création de question</div>
                    </div>
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