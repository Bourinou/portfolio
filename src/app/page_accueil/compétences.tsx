export default function Skills() {
  return (
    <section className="competences" id="compétences">
      <div className="conteneur">
        <h2 className="titre-section">Mes Compétences</h2>
        <div className="grille-competences">
          <div className="carte" data-delay="0">
            <div className="icone-competence">💻</div>
            <h3>Versioning et Collaboration</h3>
            <p>Maîtrise des outils de versioning et collaboration (Git, GitHub)</p>
          </div>
          <div className="carte" data-delay="100">
            <div className="icone-competence">🗄️</div>
            <h3>Bases de Données</h3>
            <p>Conception et gestion de bases de données (SQL, Oracle, MySQL)</p>
          </div>
          <div className="carte" data-delay="200">
            <div className="icone-competence">⚙️</div>
            <h3>Programmation Objet</h3>
            <p>Programmation orientée objet et développement d'applications (Java, JavaFX)</p>
          </div>
          <div className="carte" data-delay="300">
            <div className="icone-competence">🎨</div>
            <h3>Développement Front-end</h3>
            <p>Développement front-end et interfaces utilisateur (HTML, CSS, JavaScript, Bootstrap)</p>
          </div>
          <div className="carte" data-delay="400">
            <div className="icone-competence">🔗</div>
            <h3>Développement Back-end</h3>
            <p>Connexion web et développement back-end (C++, PHP)</p>
          </div>
          <div className="carte" data-delay="500">
            <div className="icone-competence">💬</div>
            <h3>Communication</h3>
            <p>Communication technique et professionnelle</p>
          </div>
        </div>
      </div>
    </section>
  );
}