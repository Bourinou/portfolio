import { Metadata } from "next";
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Workflow Visualizer",
    description: "Workflow Visualizer : Outil de visualisation 3D et d'orchestration pour agents d'IA.",
};

export default function Workflow() {
    return (
        <section className="projet">
            <h2 className="titre-section">Workflow Visualizer & Orchestrator</h2>
            <p className="periode">2026</p>
            <div className="contenu-a-propos">
                <div className="details-projet">
                    
                    <div className="carte">
                        <h3>Visualisation 3D & Orchestration</h3>
                        <p className="description-a-propos">
                            Ce projet permet de suivre graphiquement ce qui se passe quand des agents de code autonomes collaborent.
                            J'ai conçu un orchestrateur en Node.js (<code>orchestrate.js</code>) qui répartit et délègue des tâches de développement à un agent Claude. Côté visuel, un serveur local génère une interface 3D sur le port 3000 pour cartographier le workflow et suivre la progression en temps réel.
                        </p>
                    </div>

                    <div className="carte">
                        <h3>Optimisation et économie de tokens</h3>
                        <p className="description-a-propos">
                            Au-delà du retour visuel, le but principal de cette architecture est de maximiser la rentabilité des tokens. En passant par une note synthétique indexée par la map (~75 tokens) au lieu de faire relire à chaque fois des fichiers entiers de 250 lignes (~2 500 tokens), on réduit drastiquement la consommation.
                        </p>
                        <p className="description-a-propos" style={{ marginBottom: '5px', fontWeight: 'bold' }}>
                            La formule de rentabilité réelle :
                        </p>
                        <div style={{
                            background: 'rgba(0, 0, 0, 0.2)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            padding: '14px',
                            fontFamily: 'monospace',
                            fontSize: '0.9rem',
                            margin: '10px auto 15px auto',
                            maxWidth: '600px',
                            overflowX: 'auto',
                            color: '#e2e8f0',
                            textAlign: 'center'
                        }}>
                            Économies = (N<sub>fichiers évités</sub> × Taille) - (N<sub>messages</sub> × 850 t) - (N<sub>mises à jour</sub> × 120 t)
                        </div>
                        <p className="description-a-propos">
                            Sur un projet complexe avec délégation d'un sous-agent (comme Claude Code), le system permet d'économiser <strong>25 % à 60 % de tokens globaux</strong> car il évite la double lecture de découverte.
                        </p>
                    </div>

                    <div className="carte">
                        <h3>Pistes de gain maximal</h3>
                        <p className="description-a-propos">
                            Si l'on visait uniquement la rentabilité brute des tokens (au détriment du visuel), ne plus mettre à jour la position des agents sur la carte 3D à chaque étape (comme <code>thinking</code>, <code>planning</code> ou <code>coding</code>) ferait gagner instantanément <strong>500 à 700 tokens par tâche</strong> (chaque commande de statut coûtant ~120 tokens dans l'historique). Alléger les instructions visuelles dans <code>GEMINI.md</code> ajouterait encore 200 tokens d'économie par message. Dans ce cas pur, l'économie grimperait de <strong>40 % à 70 %</strong>.
                        </p>
                    </div>

                    <ul className="liste-projets">
                        <li>Installateur automatique PowerShell et script Batch</li>
                        <li>Cartographie 3D interactive (React / Node.js) sur le port 3000</li>
                        <li>Algorithme d'orchestration avec indexation de notes de fichiers</li>
                    </ul>
                </div>

                <div className="galerie-projet">
                    <div className="item-galerie">
                        <Image
                            alt="Aperçu de l'interface 3D de Workflow Visualizer"
                            loading="lazy"
                            src="/images/workflow_placeholder.png"
                            width={600}
                            height={400}
                        />
                        <div className="legende-galerie">Interface 3D de suivi du workflow</div>
                    </div>
                </div>

                <div className="details-projet" style={{ marginTop: '2rem' }}>
                    <a className="bouton-action"
                        href="https://github.com/Bourinou/workflow"
                        target="_blank"
                        rel="noopener noreferrer">
                        Voir le dépôt GitHub <FaGithub style={{ marginLeft: '8px' }} />
                    </a>
                </div>
            </div>
            <div className="etiquettes">
                <span className="etiquette">PowerShell</span>
                <span className="etiquette">Batchfile</span>
                <span className="etiquette">Node.js</span>
                <span className="etiquette">Agentic AI</span>
                <span className="etiquette">3D Graphics</span>
            </div>
        </section>
    );
}
