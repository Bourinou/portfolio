import { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Stage Actia Railway — Application de vidéosurveillance web",
    description:
        "Stage de 2ème année de BUT Informatique chez Actia Railway : conception d'une application web de vidéosurveillance temps réel pour le ferroviaire (React, Redux, C++, DASH/WebRTC/WebSockets).",
};

export default function ActiaRailway() {
    return (
        <section className="projet">
            <h2 className="titre-section">Actia Railway — Vidéosurveillance Web</h2>
            <p className="periode">Stage BUT Informatique 2ᵉ année · Avril - Juillet 2026 · Vendargues</p>

            <div className="contenu-a-propos">
                <div className="details-projet">

                    <div className="carte">
                        <h3>Le contexte</h3>
                        <p className="description-a-propos">
                            Stage réalisé au sein de l&apos;unité <strong>APS (Actia Projet Sûreté)</strong> d&apos;Actia Railway,
                            la division <em>Mobility</em> du groupe ACTIA spécialisée dans l&apos;hypervision pour la sûreté des
                            réseaux de transport (SNCF, métros). J&apos;ai été intégré à l&apos;équipe R&amp;D, en méthode agile,
                            avec un projet autonome et un suivi régulier de mon maître de stage.
                        </p>
                        <p className="description-a-propos">
                            L&apos;équipe maintient <strong>VisioSpace</strong>, un hyperviseur client-serveur historique en C/C++
                            (plus de 600 modules) qui agrège des centaines de flux vidéo et gère des alarmes complexes. Ma mission :
                            concevoir <strong>de zéro un client web léger </strong> pour s&apos;affranchir du client lourd Windows,
                            devenu difficile à concilier avec les exigences de cybersécurité.
                        </p>
                    </div>

                    <div className="carte">
                        <h3>L&apos;application — Vigiter UI (React / Redux)</h3>
                        <p className="description-a-propos">
                            J&apos;ai développé <strong>Vigiter UI</strong>, la refonte web de la brique stratégique de supervision :
                            grille de moniteurs vidéo, plans de rames interactifs et gestion des alarmes. Stack imposée par
                            l&apos;équipe : <strong>React + Vite</strong>, avec une architecture rigoureuse (séparation
                            présentation / logique métier, services dédiés au parsing XML et aux API, CSS compartimenté par composant).
                        </p>
                        <ul className="liste-projets">
                            <li><strong>Cartographie interactive des rames</strong> : parsing XML asynchrone, plans décodés en Base64 et mis en cache, caméras positionnées dynamiquement avec cônes de vision en SVG.</li>
                            <li><strong>Mur d&apos;images en glisser-déposer</strong> : grille de 1 à 4 flux simultanés réagençables à la souris (dnd-kit), zoom numérique jusqu&apos;à x16 et capture d&apos;écran horodatée.</li>
                            <li><strong>Interface temps réel non bloquante</strong> : alertes, points d&apos;intérêt et téléchargements gérés en modales sans jamais geler la lecture vidéo.</li>
                            <li><strong>Robustesse des données</strong> : édition hors-ligne avec sauvegarde locale, autocomplétion des gares (API SNCF), anti-rebond et normalisation des métadonnées corrompues.</li>
                        </ul>
                    </div>

                    <div className="carte">
                        <h3>Le défi technique : streaming temps réel vers le web</h3>
                        <p className="description-a-propos">
                            Le cœur de la difficulté : afficher en direct plusieurs flux vidéo avec une latence minimale. Les flux
                            <code> fmp4 </code> ne contenaient pas de temps absolu (UTC), rendant la synchronisation native du
                            navigateur impossible. Après des recherches poussées sur l&apos;API <strong>Media Source Extensions</strong>,
                            j&apos;ai déplacé le problème côté serveur.
                        </p>
                        <p className="description-a-propos">
                            J&apos;ai conçu et développé de bout en bout <strong>DashMP4Transpacker</strong>, un serveur de streaming
                            <strong> C++ natif (Winsock2)</strong>, un langage que je découvrais, capable d&apos;encapsuler des frames
                            brutes en fMP4 et de les exposer en segments <strong>MPEG-DASH</strong> (génération dynamique du manifeste
                            <code> .mpd</code>, file circulaire en RAM, support CORS, mutualisation des flux RTSP, watchdog &amp; live
                            catch-up). J&apos;ai ensuite branché les caméras réelles anonymisées en réutilisant les briques réseau
                            éprouvées du socle logiciel de l&apos;entreprise, ce qui évitait de réimplémenter une couche réseau
                            de bas niveau tout en facilitant l&apos;intégration avec le client lourd existant.
                        </p>
                        <p className="description-a-propos">
                            J&apos;ai enfin mené une <strong>étude comparative des protocoles de transport</strong> sur un même banc
                            de test : <strong>DASH</strong> (latence trop élevée), <strong>WebRTC/UDP</strong> (très faible latence mais
                            bloqué par les pare-feu) et <strong>WebSockets/TCP</strong> — identifié comme la piste la plus prometteuse,
                            conciliant faible latence et franchissement natif des pare-feu d&apos;entreprise.
                        </p>
                    </div>

                    <div className="carte">
                        <h3>Ce que j&apos;en retiens</h3>
                        <p className="description-a-propos">
                            Repartir d&apos;une page blanche sur un environnement imposé m&apos;a appris à structurer rigoureusement mon
                            code et à assumer des choix d&apos;architecture. J&apos;ai progressé en développement front-end avancé, découvert
                            le C++ et les API navigateur bas niveau, et compris la rigueur de la recherche technique (tests de latence,
                            arbitrages client/serveur). Une expérience qui a confirmé mon attrait pour l&apos;ingénierie logicielle.
                        </p>
                    </div>

                    <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
                        <Link className="bouton-secondaire" href="/#experience">
                            <FaArrowLeft style={{ marginRight: "8px" }} /> Retour à l&apos;expérience
                        </Link>
                    </div>
                </div>
            </div>

            <div className="etiquettes">
                <span className="etiquette">React</span>
                <span className="etiquette">Redux</span>
                <span className="etiquette">Vite</span>
                <span className="etiquette">TypeScript</span>
                <span className="etiquette">C++</span>
                <span className="etiquette">Winsock2</span>
                <span className="etiquette">MPEG-DASH</span>
                <span className="etiquette">WebRTC</span>
                <span className="etiquette">WebSockets</span>
                <span className="etiquette">RTSP</span>
                <span className="etiquette">Streaming vidéo</span>
            </div>
        </section>
    );
}
