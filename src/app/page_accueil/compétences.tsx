export default function Skills() {
  return (
    <section className="skills" id="compétences">
      <div className="container">
        <h2 className="section-title">Mes Compétences</h2>
        <div className="skills-grid">
          <div className="skill-card" data-delay="0">
            <div className="skill-icon">💻</div>
            <h3>Versioning et Collaboration</h3>
            <p>Maîtrise des outils de versioning et collaboration (Git, GitHub)</p>
          </div>
          <div className="skill-card" data-delay="100">
            <div className="skill-icon">🗄️</div>
            <h3>Bases de Données</h3>
            <p>Conception et gestion de bases de données (SQL, Oracle, MySQL)</p>
          </div>
          <div className="skill-card" data-delay="200">
            <div className="skill-icon">⚙️</div>
            <h3>Programmation Objet</h3>
            <p>Programmation orientée objet et développement d'applications (Java, JavaFX)</p>
          </div>
          <div className="skill-card" data-delay="300">
            <div className="skill-icon">🎨</div>
            <h3>Développement Front-end</h3>
            <p>Développement front-end et interfaces utilisateur (HTML, CSS, JavaScript, Bootstrap)</p>
          </div>
          <div className="skill-card" data-delay="400">
            <div className="skill-icon">🔗</div>
            <h3>Développement Back-end</h3>
            <p>Connexion web et développement back-end (PHP)</p>
          </div>
          <div className="skill-card" data-delay="500">
            <div className="skill-icon">💬</div>
            <h3>Communication</h3>
            <p>Communication technique et professionnelle</p>
          </div>
        </div>
      </div>
    </section>
  );
}