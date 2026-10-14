import { FaVrCardboard } from "react-icons/fa";
import Image from "next/image";

export default function Passions() {
    return (
        <section className="passions" id="passions">
            <div className="conteneur">
                <h2 className="titre-section">Mes Passions</h2>
                <div className="grille-passions">
                    <div className="carte" data-delay="0">
                        <div className="icone-passion">⛰️</div>
                        <h3>Randonnée</h3>
                        <p>Exploration des paysages et déconnexion numérique.</p>
                    </div>
                    <div className="carte" data-delay="100">
                        <div className="icone-passion">🖥️</div>
                        <h3>PC Building</h3>
                        <p>Assemblage et optimisation de configurations.</p>
                    </div>
                    <div className="carte" data-delay="200">
                        <div className="icone-passion">🍳</div>
                        <h3>Cuisine</h3>
                        <p>Créativité culinaire et découverte de saveurs.</p>
                    </div>
                    <div className="carte" data-delay="300">
                        <div className="icone-passion">
                            <FaVrCardboard />
                        </div>
                        <h3>Réalité virtuelle / augmentée</h3>
                        <p>Technologies immersives et expériences comme la réalité virtuelle / augmentée.</p>
                    </div>
                    <div className="carte" data-delay="400">
                        <div className="icone-passion"><Image src="/miku/miku-poireaux.gif" alt="" width={498} height={498} unoptimized className="gif-passion" /></div>
                        <h3>Vocaloids</h3>
                        <p>Passionné par l'univers des Vocaloids, notamment Hatsune Miku, et la musique synthétique
                            japonaise.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}