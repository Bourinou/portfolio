export default function Education() {
    return (
        <section id="formation">
            <div className="conteneur">
                <h2 className="titre-section">Ma Formation</h2>
                <div className="chronologie-formation">
                    <div className="item-chronologie" data-delay="0">
                        <div className="date-chronologie">2024 - 2027</div>
                        <div className="contenu-chronologie">
                            <h3>BUT Informatique</h3>
                            <p className="etablissement">IUT de Montpellier</p>
                            <p>Formation complète en informatique couvrant le développement logiciel, les bases de données,
                                les réseaux et la gestion de projet.</p>
                        </div>
                    </div>
                    <div className="item-chronologie" data-delay="200">
                        <div className="date-chronologie">2021 - 2024</div>
                        <div className="contenu-chronologie">
                            <h3>Baccalauréat Général</h3>
                            <p className="etablissement">Lycée</p>
                            <p>Spécialités Mathématiques et Numérique &amp; Sciences Informatiques (NSI).</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}