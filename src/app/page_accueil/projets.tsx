'use client';
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projets() {
    return (
        <section className="projets" id="projets">
            <div className="conteneur">
                <h2 className="titre-section">Mes Projets</h2>
                <div className="grille-projets">

                    <Link href="projets/demos">
                        <div className="carte mis-en-avant">
                            <div className="indicateur-carte">
                                <FaExternalLinkAlt />
                            </div>
                            <h3>Site de Vote (Demos) ⭐</h3>
                            <p className="periode">2024-2025</p>
                            <p className="description">Application web de vote en ligne avec gestion d'utilisateurs et questions
                                (MVC, PHP).</p>
                            <div className="etiquettes">
                                <span className="etiquette">PHP</span>
                                <span className="etiquette">MVC</span>
                                <span className="etiquette">MySQL</span>
                                <span className="etiquette">Web</span>
                            </div>
                        </div>
                    </Link>

                    <Link href="projets/ndi2024">
                        <div className="carte">
                            <div className="indicateur-carte">
                                <FaExternalLinkAlt />
                            </div>
                            <h3>Nuit de l'Info </h3>
                            <p className="periode">5-6 Décembre 2024</p>
                            <p className="description">Hackathon national de 12h : création d’une plateforme web collaborative en
                                équipe.</p>
                            <div className="etiquettes">
                                <span className="etiquette">Hackathon</span>
                                <span className="etiquette">Team work</span>
                                <span className="etiquette">Web</span>
                            </div>
                        </div>
                    </Link>

                    <Link href="projets/pokemongame">
                        <div className="carte">
                            <div className="indicateur-carte">
                                <FaExternalLinkAlt />
                            </div>
                            <h3>Jeu de Cartes Pokémon</h3>
                            <p className="periode">2024</p>
                            <p className="description">Jeu de cartes Pokémon développé en Java et JavaFX:
                                logique , gestion d’événements, etc.</p>
                            <div className="etiquettes">
                                <span className="etiquette">Java</span>
                                <span className="etiquette">JavaFX</span>
                                <span className="etiquette">POO</span>
                            </div>
                        </div>
                    </Link>

                    <Link href="projets/escapegame">
                        <div className="carte">
                            <div className="indicateur-carte">
                                <FaExternalLinkAlt />
                            </div>
                            <h3>Site Web Escape Game</h3>
                            <p className="periode">2024</p>
                            <p className="description">Site statique immersif pour un Escape Game, design responsive et énigmes
                                interactives.</p>
                            <div className="etiquettes">
                                <span className="etiquette">HTML5</span>
                                <span className="etiquette">CSS3</span>
                                <span className="etiquette">Responsive Design</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}