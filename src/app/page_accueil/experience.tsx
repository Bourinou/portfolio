'use client';
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Experience {
  id: number;
  href: string;
  title: string;
  entreprise: string;
  description: string;
  period: string;
  tags: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    href: "experiences/actia-railway",
    title: "Stage — Développeur Web / R&D",
    entreprise: "Actia Railway (unité APS, Vendargues)",
    description:
      "Conception et développement d'une application web de vidéosurveillance temps réel pour le secteur ferroviaire (React, Redux, C++).",
    period: "Avril - Juillet 2026",
    tags: ["React", "TypeScript", "C++", "Streaming vidéo"],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="conteneur">
        <h2 className="titre-section">Expérience</h2>
        <div className="chronologie-experience">
          {experiences.map((exp) => (
            <div key={exp.id} className="item-chronologie">
              <div className="date-chronologie">{exp.period}</div>
              <Link href={exp.href}>
                <div className="carte experience-carte-clickable">
                  <div className="indicateur-carte">
                    <FaExternalLinkAlt />
                  </div>
                  <h3>{exp.title}</h3>
                  <p className="etablissement">{exp.entreprise}</p>
                  <p>{exp.description}</p>
                  <div className="etiquettes">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="etiquette">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
