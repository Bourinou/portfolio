export default function Education() {
  return (
        <section id="formation">
        <div className="container">
            <h2 className="section-title">Ma Formation</h2>
            <div className="education-timeline">
                <div className="timeline-item" data-delay="0">
                    <div className="timeline-date">2024 - 2027</div>
                    <div className="timeline-content">
                        <h3>BUT Informatique</h3>
                        <p className="institution">IUT de Montpellier</p>
                        <p>Formation complète en informatique couvrant le développement logiciel, les bases de données,
                            les réseaux et la gestion de projet.</p>
                    </div>
                </div>
                <div className="timeline-item" data-delay="200">
                    <div className="timeline-date">2021 - 2024</div>
                    <div className="timeline-content">
                        <h3>Baccalauréat Général</h3>
                        <p className="institution">Lycée</p>
                        <p>Spécialités Mathématiques et Numérique &amp; Sciences Informatiques (NSI).</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}