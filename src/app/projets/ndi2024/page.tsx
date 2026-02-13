import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nuit de l'Info 2024",
    description: "Nuit de l'Info 2024 : Défi national de programmation.",
};

export default function Ndi2024() {
    return (
        <main>
            <section className="projet">
                <h2 className="titre-section">Nuit de l'Info 2024 <span className="mis-en-avant-badge">⭐</span></h2>
                <p className="periode">5-6 Décembre 2024</p>
                <div className="contenu-a-propos">
                    <div className="details-projet">
                        <div className="section-contenu">
                            <h3>🌙 Un Défi National</h3>
                            <p className="description-a-propos">
                                La Nuit de l'Info est un défi national rassemblant des étudiants de toute la France pour une
                                nuit blanche de programmation intensive. L'objectif : développer une application web
                                complète du coucher au lever du soleil, en répondant à un sujet dévoilé à la dernière
                                minute.
                                Pour l'édition 2024, consacrée à l'ONG Race for Water, notre équipe s'est mobilisée le 5
                                et 6 décembre pour relever le challenge.
                            </p>
                        </div>

                        <div className="section-contenu">
                            <h3>🛠️ Architecture & Intégration</h3>
                            <p className="description-a-propos">
                                Mon rôle au sein de l'équipe s'est concentré sur le développement Front-end et
                                l'intégration.
                                Sur le plan technique, nous avons opté pour une stack efficace et universelle : HTML5 et
                                CSS3 pour la structure et le design, couplés à JavaScript pour l'interactivité.
                                Le site, bien qu'hébergé en ligne, a été conçu comme une application statique, sans back-end
                                complexe ni base de données, misant tout sur l'expérience utilisateur dans le navigateur.
                                Un des défis majeurs a été la gestion du temps et la coordination de l'équipe sous la
                                pression de l'horloge.
                                L'utilisation de Git et GitHub a été cruciale pour fusionner nos travaux respectifs sans
                                conflits majeurs, malgré la fatigue grandissante.
                            </p>
                        </div>

                        <div className="section-contenu">
                            <h3>🚀 Une Aventure Humaine</h3>
                            <p className="description-a-propos">
                                Nous avons également mis un point d'honneur à rendre l'interface intuitive et "responsive",
                                afin qu'elle soit consultable sur tous les supports.
                                Cette expérience m'a appris à gérer mon stress, à communiquer efficacement dans l'urgence et
                                à prioriser les fonctionnalités essentielles.
                                Le résultat final est un site fonctionnel, déployé et accessible, témoignant de notre
                                cohésion d'équipe et de notre persévérance.
                                Bien au-delà du code, c'est l'ambiance de cette nuit blanche entre amis qui reste en tête.
                                Ce projet a renforcé ma passion pour le développement web et m'a prouvé que l'on peut
                                accomplir des choses en peu de temps et en s'amusant avec une bonne organisation.
                                C'est une expérience humaine et technique inoubliable que je suis prêt à renouveler sans
                                hésitation.
                            </p>
                        </div>

                        <ul className="liste-projets">
                            <li>Développement Front-end (HTML, CSS, JS)</li>
                            <li>Collaboration et gestion projet avec GitHub</li>
                        </ul>
                        <a className="bouton-action" href="https://ndi.faceoff.watch" target="_blank">Voir le site réalisé</a>
                    </div>
                </div>
                <div className="etiquettes">
                    <span className="etiquette">Web</span>
                    <span className="etiquette">Hackathon</span>
                    <span className="etiquette">Collaboration</span>
                </div>
            </section>
        </main>

    )
}