import Image from "next/image";
import { SiBootstrap, SiCplusplus, SiJavascript } from "react-icons/si";

// petits logos de public/competences/ (64px de haut, affichés à la taille du texte)
function Logo({ nom, alt, largeur }: { nom: string; alt: string; largeur: number }) {
  return <Image src={`/competences/${nom}.png`} alt={alt} width={largeur} height={64} />;
}

export default function Skills() {
  return (
    <section className="competences" id="compétences">
      <div className="conteneur">
        <h2 className="titre-section">Mes Compétences</h2>
        <div className="grille-competences">
          <div className="carte" data-delay="0">
            <div className="icone-competence">
              <Logo nom="git" alt="Git" largeur={64} />
              <Logo nom="github" alt="GitHub" largeur={66} />
            </div>
            <h3>Versioning et Collaboration</h3>
            <p>Maîtrise des outils de versioning et collaboration (Git, GitHub)</p>
          </div>
          <div className="carte" data-delay="100">
            <div className="icone-competence">
              <Logo nom="sql" alt="SQL" largeur={122} />
              <Logo nom="oracle" alt="Oracle" largeur={86} />
              <Logo nom="mysql" alt="MySQL" largeur={64} />
              <Logo nom="postgresql" alt="PostgreSQL" largeur={62} />
              <Logo nom="mongodb" alt="MongoDB" largeur={28} />
            </div>
            <h3>Bases de Données</h3>
            <p>Conception et gestion de bases de données (SQL, Oracle, MySQL, PostgreSQL, MongoDB)</p>
          </div>
          <div className="carte" data-delay="200">
            <div className="icone-competence">
              <Logo nom="java" alt="Java" largeur={46} />
            </div>
            <h3>Programmation Objet</h3>
            <p>Programmation orientée objet et développement d'applications (Java, JavaFX)</p>
          </div>
          <div className="carte" data-delay="300">
            <div className="icone-competence">
              <Logo nom="html" alt="HTML" largeur={56} />
              <Logo nom="css" alt="CSS" largeur={56} />
              <SiJavascript title="JavaScript" color="#F7DF1E" />
              <SiBootstrap title="Bootstrap" color="#7952B3" />
            </div>
            <h3>Développement Front-end</h3>
            <p>Développement front-end et interfaces utilisateur (HTML, CSS, JavaScript, Bootstrap)</p>
          </div>
          <div className="carte" data-delay="400">
            <div className="icone-competence">
              <SiCplusplus title="C++" color="#659AD2" />
              <Logo nom="php" alt="PHP" largeur={122} />
            </div>
            <h3>Développement Back-end</h3>
            <p>Connexion web et développement back-end (C++, PHP)</p>
          </div>
          <div className="carte" data-delay="500">
            <div className="icone-competence">
              <Logo nom="communication" alt="Communication" largeur={82} />
            </div>
            <h3>Communication</h3>
            <p>Communication technique et professionnelle</p>
          </div>
        </div>
      </div>
    </section>
  );
}