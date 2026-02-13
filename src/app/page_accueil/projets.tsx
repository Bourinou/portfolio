'use client';

export default function Projets() {
  return (
        <section className="projet" id="projet">
        <div className="container">
            <h2 className="section-title">Mes Projets</h2>
            <div className="projet-grid">
                <div className="projet-card featured" style={{cursor: "pointer"}} onClick={() => window.location.href='ndi2024.html'}>
                    <div className="card-indicator">
                        <i className="fas fa-external-link-alt"></i>
                    </div>
                    <h3>Nuit de l'Info ⭐</h3>
                    <p className="period">5-6 Décembre 2024</p>
                    <p className="description">Hackathon national de 12h : création d’une plateforme web collaborative en
                        équipe.</p>
                    <div className="tags">
                        <span className="tag">Hackathon</span>
                        <span className="tag">Travail d'équipe</span>
                        <span className="tag">Web</span>
                    </div>
                </div>

                <div className="projet-card" style={{cursor: "pointer"}} onClick={() => window.location.href='pokemongame.html'}>
                    <div className="card-indicator">
                        <i className="fas fa-external-link-alt"></i>
                    </div>
                    <h3>Jeu de Cartes Pokémon</h3>
                    <p className="period">2024</p>
                    <p className="description">Jeu de cartes Pokémon développé en JavaFX : interface graphique moderne,
                        logique de jeu fidèle, gestion d’événements.</p>
                    <div className="tags">
                        <span className="tag">Java</span>
                        <span className="tag">JavaFX</span>
                        <span className="tag">POO</span>
                    </div>
                </div>

                <div className="projet-card" style={{cursor: "pointer"}} onClick={() => window.location.href='escapegame.html'}>
                    <div className="card-indicator">
                        <i className="fas fa-external-link-alt"></i>
                    </div>
                    <h3>Site Web Escape Game</h3>
                    <p className="period">2024</p>
                    <p className="description">Site statique immersif pour un Escape Game, design responsive et énigmes
                        interactives.</p>
                    <div className="tags">
                        <span className="tag">HTML5</span>
                        <span className="tag">CSS3</span>
                        <span className="tag">Responsive Design</span>
                    </div>
                </div>

                <div className="projet-card" style={{cursor: "pointer"}} onClick={() => window.location.href='vote.html'}>
                    <div className="card-indicator">
                        <i className="fas fa-external-link-alt"></i>
                    </div>
                    <h3>Site de Vote (Demos)</h3>
                    <p className="period">2024-2025</p>
                    <p className="description">Application web de vote en ligne avec gestion d'utilisateurs et questions
                        (MVC, PHP).</p>
                    <div className="tags">
                        <span className="tag">PHP</span>
                        <span className="tag">MVC</span>
                        <span className="tag">MySQL</span>
                        <span className="tag">Web</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}