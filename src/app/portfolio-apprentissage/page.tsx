'use client';

import { useState } from 'react';
import { FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import './portfolio.css';

/* ====== DONNÉES COMPÉTENCES ====== */

const competences = [
    {
        id: 'c1', numero: 'C1',
        titre: 'Réaliser un développement d\'application',
        ac: [
            'AC1 — Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences',
            'AC2 — Appliquer des principes d\'accessibilité et d\'ergonomie',
            'AC3 — Adopter de bonnes pratiques de conception et de programmation',
            'AC4 — Vérifier et valider la qualité de l\'application par les tests',
        ],
        ce: [
            'CE1 — En respectant les besoins décrits par le client',
            'CE2 — En appliquant les principes algorithmiques',
            'CE3 — En veillant à la qualité du code et à sa documentation',
            'CE4 — En choisissant les ressources techniques appropriées',
        ],
    },
    {
        id: 'c2', numero: 'C2',
        titre: 'Optimiser des applications',
        ac: [
            'AC1 — Choisir des structures de données complexes adaptées au problème',
            'AC2 — Utiliser des techniques algorithmiques adaptées pour des problèmes complexes',
            'AC3 — Comprendre les enjeux et moyens de sécurisation des données et du code',
            'AC4 — Évaluer l\'impact environnemental et sociétal des solutions proposées',
        ],
        ce: [
            'CE1 — En formalisant et modélisant des situations complexes',
            'CE2 — En recensant les algorithmes et les structures de données usuels',
            'CE3 — En s\'appuyant sur des schémas de raisonnement',
            'CE4 — En justifiant les choix et validant les résultats',
        ],
    },
    {
        id: 'c3', numero: 'C3',
        titre: 'Administrer des systèmes informatiques communicants complexes',
        ac: [
            'AC1 — Concevoir et développer des applications communicantes',
            'AC2 — Utiliser des serveurs et des services réseaux virtualisés',
            'AC3 — Sécuriser les services et données d\'un système',
        ],
        ce: [
            'CE1 — En sécurisant le système d\'information',
            'CE2 — En appliquant les normes en vigueur et les bonnes pratiques architecturales et de sécurité',
            'CE3 — En offrant une qualité de service optimale',
            'CE4 — En assurant la continuité d\'activité',
        ],
    },
    {
        id: 'c4', numero: 'C4',
        titre: 'Gérer des données de l\'information',
        ac: [
            'AC1 — Optimiser les modèles de données de l\'entreprise',
            'AC2 — Assurer la confidentialité des données (intégrité et sécurité)',
            'AC3 — Organiser la restitution de données à travers la programmation et la visualisation',
            'AC4 — Manipuler des données hétérogènes',
        ],
        ce: [
            'CE1 — En respectant les réglementations sur la vie privée et la protection des données personnelles',
            'CE2 — En respectant les enjeux économiques, sociétaux et écologiques du stockage de données',
            'CE3 — En s\'appuyant sur des bases mathématiques',
            'CE4 — En assurant la cohérence et la qualité',
        ],
    },
    {
        id: 'c5', numero: 'C5',
        titre: 'Conduire un projet',
        ac: [
            'AC1 — Identifier les processus présents dans une organisation en vue d\'améliorer les SI',
            'AC2 — Formaliser les besoins du client et de l\'utilisateur',
            'AC3 — Identifier les critères de faisabilité d\'un projet informatique',
            'AC4 — Définir et mettre en œuvre une démarche de suivi de projet',
        ],
        ce: [
            'CE1 — En communiquant efficacement avec les différents acteurs d\'un projet',
            'CE2 — En respectant les règles juridiques et les normes en vigueur',
            'CE3 — En sensibilisant à une gestion éthique, responsable, durable et interculturelle',
            'CE4 — En adoptant une démarche proactive, créative et critique',
        ],
    },
    {
        id: 'c6', numero: 'C6',
        titre: 'Collaborer au sein d\'une équipe informatique',
        ac: [
            'AC1 — Comprendre la diversité, la structure et la dimension de l\'informatique dans une organisation',
            'AC2 — Appliquer une démarche pour intégrer une équipe informatique au sein d\'une organisation',
            'AC3 — Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique',
            'AC4 — Rendre compte de son activité professionnelle',
        ],
        ce: [
            'CE1 — En inscrivant sa démarche au sein d\'une équipe pluridisciplinaire',
            'CE2 — En accompagnant la mise en œuvre des évolutions informatiques',
            'CE3 — En veillant au respect des contraintes juridiques',
            'CE4 — En développant une communication efficace et collaborative',
        ],
    },
];

/* ====== DONNÉES PROJETS (ordre chronologique : plus récent d'abord) ====== */

const projets = [
    {
        id: 'noodle',
        emoji: '🍜',
        nom: 'Noodle — Audit & Refactoring',
        periode: '2026 (Semestre 4)',
        contexte: {
            description: 'Projet d\'analyse, d\'audit et de refactoring complet d\'une application existante ("Noodle") présentant un code source de mauvaise qualité et une base de données mal conçue. L\'objectif était d\'identifier tous les problèmes (sécurité, performance, architecture, qualité de code) puis de proposer et implémenter des solutions pour rendre l\'application sûre, maintenable et optimisée.',
            dates: '2026 (Semestre 4)',
            duree: '~3 mois',
            objectifs: 'Auditer une application existante, identifier les failles de sécurité, corriger l\'architecture et optimiser la base de données',
            contraintes: 'Code legacy à analyser sans documentation, base de données non normalisée, failles de sécurité à corriger, respect des bonnes pratiques OWASP',
            equipe: 'Robin CERISIER, Louis ROUBAUD, Sophian ALAMI CHENTOUFI',
        },
        demarche: {
            implication: 4,
            autonomie: 4,
            description: 'Analyse approfondie du code source et de la base de données. Rédaction d\'un rapport d\'audit complet. Implémentation des corrections : refactoring du code, normalisation de la BD, correction des failles de sécurité (injection SQL, XSS, CSRF). Travail méthodique d\'analyse puis de correction.',
        },
        ac: [
            { comp: 'c1', items: ['AC3 — Bonnes pratiques de conception appliquées au refactoring', 'AC4 — Validation de la qualité par les tests après correction'], justification: '[À compléter : La correction du code est en cours, les bonnes pratiques seront appliquées lors du refactoring.]' },
            { comp: 'c2', items: ['AC1 — Choix de structures de données adaptées', 'AC3 — Sécurisation des données et du code', 'AC4 — Évaluation de l\'impact des solutions'], justification: 'Analyse du code via des extensions de qualité (linters, analyseurs statiques) pour identifier les failles et mauvaises pratiques. Rapport détaillé avec solutions proposées.' },
            { comp: 'c3', items: ['AC3 — Sécurisation des services et données du système'], justification: 'Identification des failles de sécurité (injections SQL, XSS) dans le rapport d\'audit. Corrections en cours de mise en œuvre.' },
            { comp: 'c4', items: ['AC1 — Optimisation du modèle de données (normalisation)', 'AC2 — Confidentialité et intégrité des données', 'AC4 — Manipulation de données hétérogènes'], justification: 'Proposition d\'un nouveau schéma de BD normalisé. Normalisation en cours avec mise à jour du code dépendant de l\'ancienne structure.' },
            { comp: 'c5', items: ['AC1 — Identification des processus pour améliorer le SI', 'AC4 — Démarche structurée d\'audit et de suivi'], justification: 'Démarche méthodique : analyse manuelle + outils automatisés, puis rédaction d\'un rapport structuré avec problèmes et solutions.' },
            { comp: 'c6', items: ['AC1 — Compréhension de l\'organisation informatique', 'AC4 — Rapport d\'activité professionnelle'], justification: '[À compléter : N\'étant qu\'au début du projet, il est difficile de justifier correctement la répartition du travail.]' },
        ],
        ce: [
            { comp: 'c1', items: ['CE3 — Qualité du code et documentation', 'CE4 — Ressources techniques appropriées'] },
            { comp: 'c2', items: ['CE1 — Formalisation des problèmes complexes', 'CE4 — Justification des choix et validation'] },
            { comp: 'c3', items: ['CE1 — Sécurisation du SI', 'CE2 — Normes et bonnes pratiques de sécurité'] },
            { comp: 'c4', items: ['CE1 — Respect RGPD', 'CE2 — Enjeux du stockage de données', 'CE4 — Cohérence et qualité des données'] },
            { comp: 'c5', items: ['CE4 — Démarche proactive et critique'] },
            { comp: 'c6', items: ['CE2 — Accompagnement des évolutions', 'CE4 — Communication collaborative'] },
        ],
        cours: ['Qualité de développement', 'Sécurité informatique', 'Base de données avancées', 'Architecture logicielle', 'Gestion de projet'],
        traces: [],
        etiquettes: ['Audit', 'Refactoring', 'Sécurité', 'SQL', 'OWASP', 'Tests'],
    },
    {
        id: 'demos',
        emoji: '🗳️',
        nom: 'Demos — Site de Vote en Ligne',
        periode: '2025 - 2026 (Semestre 3)',
        contexte: {
            description: 'Conception et développement d\'une application web complète de vote en ligne dans le cadre du BUT Informatique. L\'objectif principal était de réaliser un système permettant aux utilisateurs de créer des questions/sondages, d\'y répondre et de consulter les résultats, le tout sécurisé par une authentification robuste.',
            dates: '2025 - 2026',
            duree: '~5 mois',
            objectifs: 'Créer une plateforme de vote fonctionnelle, sécurisée et ergonomique en architecture MVC',
            contraintes: 'PHP natif (sans framework), MySQL, respect du modèle MVC strict, gestion de sessions, sécurité des données',
            equipe: 'Robin CERISIER, Louis ROUBAUD, Sophian ALAMI CHENTOUFI',
        },
        demarche: {
            implication: 5,
            autonomie: 4,
            description: 'Rôle actif dans le développement back-end (contrôleurs, modèles) et front-end (vues, filtres, UX). Prise d\'initiative sur la gestion des utilisateurs, les filtres de recherche et la sécurisation des formulaires. Travail en autonomie croissante au fil du projet.',
        },
        ac: [
            { comp: 'c1', items: ['AC1 — Spécifications fonctionnelles à partir du cahier des charges', 'AC2 — Interface accessible et responsive', 'AC3 — Architecture MVC propre et modulaire', 'AC4 — Tests unitaires PHPUnit'], justification: 'L\'architecture MVC a été mise en place dès le début pour séparer la logique métier (modèles), le routage (contrôleurs) et l\'affichage (vues). Les tests unitaires PHPUnit ont permis de valider le bon fonctionnement des modèles et contrôleurs.' },
            { comp: 'c2', items: ['AC3 — Sécurisation des entrées et protection XSS/CSRF'], justification: 'Protection des formulaires contre les injections XSS et les attaques CSRF via des tokens de session et l\'échappement des entrées utilisateur.' },
            { comp: 'c3', items: ['AC1 — Application web communicante client-serveur', 'AC3 — Sécurisation des sessions et données'], justification: 'Architecture client-serveur avec requêtes HTTP, gestion des sessions PHP pour l\'authentification et le suivi des utilisateurs connectés.' },
            { comp: 'c4', items: ['AC1 — Modélisation relationnelle optimisée', 'AC2 — Hashage des mots de passe, contrôle d\'accès', 'AC3 — Restitution et visualisation des résultats de vote'], justification: 'Base de données MySQL avec modèle relationnel normalisé. Mots de passe hashés avec bcrypt. Les résultats de vote sont restitués via des vues PHP avec filtrage et tri.' },
            { comp: 'c5', items: ['AC1 — Analyse des processus de vote', 'AC2 — Formalisation des besoins utilisateurs', 'AC3 — Critères de faisabilité évalués', 'AC4 — Suivi avec Git, issues, répartition des tâches'], justification: 'Les besoins ont été formalisés à partir d\'un cahier des charges. Le suivi de projet a été réalisé avec Gitlab (branches, issues, pull requests).' },
            { comp: 'c6', items: ['AC1 — Compréhension de l\'organisation du projet', 'AC2 — Intégration progressive dans l\'équipe', 'AC3 — Communication et entraide', 'AC4 — Comptes-rendus réguliers d\'avancement'], justification: 'Répartition des tâches au sein du groupe, communication régulière via des réunions informelles et des comptes-rendus d\'avancement.' },
        ],
        ce: [
            { comp: 'c1', items: ['CE1 — Besoins client respectés', 'CE2 — Algorithmes de tri/filtre', 'CE3 — Code documenté et versionné', 'CE4 — Stack PHP/MySQL choisie'] },
            { comp: 'c4', items: ['CE1 — Respect RGPD sur les données de vote', 'CE4 — Cohérence BD assurée'] },
            { comp: 'c5', items: ['CE1 — Communication équipe efficace', 'CE4 — Démarche proactive'] },
            { comp: 'c6', items: ['CE1 — Équipe pluridisciplinaire', 'CE4 — Communication collaborative'] },
        ],
        cours: ['Développement Web (PHP/MVC)', 'Base de données relationnelles', 'Qualité de développement', 'Gestion de projet', 'IHM / Ergonomie'],
        traces: [
            { label: 'Voir le site Demos', url: 'https://webinfo.iutmontp.univ-montp2.fr/~cerisierr/demos/web/' },
        ],
        etiquettes: ['PHP', 'MVC', 'MySQL', 'HTML/CSS', 'PHPUnit', 'Git'],
    },
    {
        id: 'ndi2024',
        emoji: '🌙',
        nom: 'Nuit de l\'Info 2024',
        periode: '5-6 Décembre 2024',
        contexte: {
            description: 'Participation à la Nuit de l\'Info, défi national rassemblant des étudiants de toute la France pour une nuit blanche de programmation. L\'édition 2024 portait sur l\'ONG Race for Water. L\'objectif : développer une application web complète du coucher au lever du soleil en répondant à un sujet dévoilé à la dernière minute.',
            dates: '5-6 Décembre 2024',
            duree: '1 nuit (~12 heures)',
            objectifs: 'Développer un site web fonctionnel et responsive pour sensibiliser à la cause de Race for Water',
            contraintes: 'Temps très limité, sujet inconnu à l\'avance, travail d\'équipe sous pression, déploiement en ligne obligatoire',
            equipe: 'Nathan TRIOLEYRE, Nathan DUHAUT, Clément LAVIGNE, Rayhan SAOUAB',
        },
        demarche: {
            implication: 2,
            autonomie: 2,
            description: 'Rôle principal sur le développement Front-end et l\'intégration. Organisation de la répartition des tâches. Gestion du stress et communication efficace dans l\'urgence. Priorisation des fonctionnalités essentielles sous contrainte de temps.',
        },
        ac: [
            { comp: 'c1', items: ['AC1 — Implémentation rapide des spécifications', 'AC2 — Interface responsive et intuitive', 'AC3 — Bonnes pratiques malgré la contrainte de temps'], justification: 'Le sujet étant dévoilé au dernier moment, les spécifications ont été traduites en code en temps réel. L\'interface a été conçue responsive dès le départ avec HTML5/CSS3.' },
            { comp: 'c3', items: ['AC1 — Site web déployé et accessible en ligne'], justification: 'Le site a été déployé en ligne et rendu accessible publiquement avant la fin de la nuit.' },
            { comp: 'c5', items: ['AC3 — Faisabilité évaluée en temps réel', 'AC4 — Suivi projet avec GitHub sous pression'], justification: 'Évaluation continue de ce qui était réalisable dans le temps imparti. Utilisation de Git/GitHub pour fusionner les contributions de l\'équipe sans conflits.' },
            { comp: 'c6', items: ['AC2 — Intégration rapide dans l\'équipe', 'AC3 — Compétences interpersonnelles mobilisées', 'AC4 — Bilan de l\'expérience et retour d\'expérience'], justification: 'Communication intense et efficace sous pression. Répartition des rôles (front-end, contenu, design) et coordination pour respecter la deadline.' },
        ],
        ce: [
            { comp: 'c1', items: ['CE3 — Code organisé avec Git', 'CE4 — HTML/CSS/JS choisis pour l\'efficacité'] },
            { comp: 'c5', items: ['CE1 — Communication d\'urgence efficace', 'CE4 — Créativité et proactivité'] },
            { comp: 'c6', items: ['CE1 — Travail pluridisciplinaire', 'CE4 — Communication collaborative intense'] },
        ],
        cours: ['Développement Web', 'Gestion de projet', 'Communication'],
        traces: [
            { label: 'Voir le site NDI', url: 'https://ndi.faceoff.watch' },
        ],
        etiquettes: ['HTML', 'CSS', 'JavaScript', 'Hackathon', 'Git'],
    },
    {
        id: 'pokemon',
        emoji: '🎮',
        nom: 'Jeu de Cartes Pokémon',
        periode: '2025 (Semestre 2)',
        contexte: {
            description: 'Développement d\'une application de jeu de cartes Pokémon en Java avec interface graphique JavaFX. L\'objectif était de recréer l\'expérience du jeu de cartes avec un moteur de jeu complet gérant les tours, les types, les dégâts et les conditions de victoire.',
            dates: '2025 (Semestre 2)',
            duree: '~3 mois',
            objectifs: 'Implémenter un moteur de jeu respectant les règles Pokémon simplifiées avec une interface graphique interactive',
            contraintes: 'Java obligatoire, JavaFX pour l\'IHM, POO avancée (héritage, polymorphisme), gestion d\'événements',
            equipe: 'Nathan DUHAUT',
        },
        demarche: {
            implication: 4,
            autonomie: 5,
            description: 'Implémentation complète du moteur de jeu et d\'une grande partie de l\'interface graphique. Autonomie totale sur la conception de l\'architecture objet (classes Pokémon, Énergie, Dresseur). Travail approfondi sur le polymorphisme et l\'héritage pour gérer les spécificités de chaque type de carte.',
        },
        ac: [
            { comp: 'c1', items: ['AC1 — Spécifications du jeu implémentées', 'AC3 — POO avancée, code structuré', 'AC4 — Tests du moteur de jeu'], justification: 'Les règles du jeu Pokémon simplifiées ont été traduites en spécifications techniques. L\'architecture objet utilise l\'héritage (classes Pokémon, Énergie, Dresseur) et le polymorphisme pour gérer les types de cartes. Tests du moteur de jeu pour valider les calculs de dégâts et les conditions de victoire.' },
            { comp: 'c2', items: ['AC1 — Structures de données adaptées (listes, piles)', 'AC2 — Algorithmes de calcul de dégâts et gestion de tours'], justification: 'Utilisation de listes et piles pour la main des joueurs, la pioche et le plateau. Algorithmes de calcul de dégâts prenant en compte les types (Eau > Feu > Plante, etc.) et la gestion des tours.' },
            { comp: 'c5', items: ['AC2 — Règles du jeu formalisées'], justification: 'Les règles officielles Pokémon simplifiées ont été formalisées en spécifications avant l\'implémentation.' },
            { comp: 'c6', items: ['AC3 — Collaboration en binôme'], justification: 'Travail en binôme avec répartition des tâches (moteur de jeu / interface graphique) et pair programming sur les parties critiques.' },
        ],
        ce: [
            { comp: 'c1', items: ['CE2 — Algorithmes de jeu', 'CE3 — Code documenté', 'CE4 — Java/JavaFX choisi'] },
            { comp: 'c2', items: ['CE2 — Structures de données adaptées', 'CE3 — Raisonnement logique', 'CE4 — Validation des résultats de jeu'] },
        ],
        cours: ['Développement Objet (Java)', 'IHM / JavaFX', 'Algorithmique avancée', 'Qualité de développement'],
        traces: [],
        etiquettes: ['Java', 'JavaFX', 'POO', 'Game Design'],
    },
    {
        id: 'escapegame',
        emoji: '🔐',
        nom: 'Site Vitrine Escape Game',
        periode: '2024 (Semestre 1)',
        contexte: {
            description: 'Premier projet web réalisé en BUT Informatique. Création d\'un site vitrine pour un escape game, présentant l\'établissement, ses différentes salles et l\'ambiance générale afin de donner envie aux visiteurs de réserver. Le site ne comportait pas de système de réservation : il s\'agissait d\'un exercice fondamental de structuration et de mise en page web.',
            dates: '2024 (Semestre 1)',
            duree: '~2 mois',
            objectifs: 'Créer un site vitrine présentant un escape game (salles, ambiance) avec uniquement HTML5 et CSS3',
            contraintes: 'Aucun JavaScript autorisé, HTML et CSS purs, site multi-pages avec navigation cohérente',
            equipe: 'Nathan TRIOLEYRE, Rahyan SAOUAB, Sohan PINATEL',
        },
        demarche: {
            implication: 2,
            autonomie: 3,
            description: 'Travail entièrement individuel, de la conception graphique à l\'intégration HTML/CSS. Apprentissage autodidacte des sélecteurs CSS avancés, de Flexbox et des transitions pour créer une présentation visuelle soignée. Ce projet fondateur a posé les bases de toutes mes compétences web.',
        },
        ac: [
            { comp: 'c1', items: ['AC1 — Spécifications fonctionnelles du site vitrine', 'AC2 — Accessibilité et ergonomie de navigation', 'AC3 — Code HTML5/CSS3 propre et sémantique'], justification: 'Structure HTML5 sémantique pour présenter les salles d\'escape game. Navigation multi-pages claire et ergonomique. CSS3 pur avec Flexbox, transitions et animations pour une présentation visuelle soignée.' },
        ],
        ce: [
            { comp: 'c1', items: ['CE3 — Code structuré et organisé', 'CE4 — HTML5/CSS3 comme ressources techniques'] },
        ],
        cours: ['Développement Web (HTML/CSS)', 'Introduction à l\'informatique'],
        traces: [
            { label: 'Voir le site', url: 'https://bourinou.github.io/escapegame/' },
        ],
        etiquettes: ['HTML5', 'CSS3', 'Web', 'Site Vitrine'],
    },
];

/* ====== COMPOSANT PAGE ====== */

export default function PortfolioApprentissage() {
    const [activeCompetences, setActiveCompetences] = useState<string[]>([]);
    const [activeProjets, setActiveProjets] = useState<string[]>([]);

    const toggleCompetence = (id: string) => {
        setActiveCompetences(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    };

    const toggleProjet = (id: string) => {
        setActiveProjets(prev =>
            prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
        );
    };

    return (
        <section className="portfolio-page">
            <div className="conteneur">
                <h2 className="titre-section">Portfolio d&apos;apprentissage</h2>
                <p className="portfolio-intro">
                    Bilan de mes apprentissages en <strong>BUT2 Informatique</strong>, parcours A
                    « Réalisation d&apos;applications : conception, développement, validation ».
                    Ce portfolio présente mes compétences acquises à travers les projets réalisés,
                    en les associant aux apprentissages critiques (AC) et composantes essentielles (CE)
                    de niveau 2 du référentiel.
                </p>

                {/* ====== COMPÉTENCES ====== */}
                <h2 className="titre-section">Référentiel de Compétences</h2>
                <div className="competences-list">
                    {competences.map(comp => (
                        <div
                            key={comp.id}
                            className={`competence-card ${comp.id} ${activeCompetences.includes(comp.id) ? 'active' : ''}`}
                        >
                            <div className="competence-header" onClick={() => toggleCompetence(comp.id)}>
                                <div className="competence-numero">{comp.numero}</div>
                                <span className="competence-titre">{comp.titre}</span>
                                <FaChevronDown className="competence-chevron" />
                            </div>
                            <div className="competence-body">
                                <div className="competence-content">
                                    <div className="competence-section-title">Apprentissages critiques</div>
                                    <div className="ac-list">
                                        {comp.ac.map((ac, i) => (
                                            <div key={i} className="ac-item">{ac}</div>
                                        ))}
                                    </div>
                                    <div className="competence-section-title">Composantes essentielles</div>
                                    <div className="ce-list">
                                        {comp.ce.map((ce, i) => (
                                            <div key={i} className="ce-item">{ce}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ====== PROJETS ====== */}
                <div className="projets-section">
                    <h2 className="titre-section">Projets &amp; Travaux</h2>

                    {projets.map(projet => (
                        <div
                            key={projet.id}
                            className={`projet-accordion ${activeProjets.includes(projet.id) ? 'active' : ''}`}
                        >
                            <div className="projet-header" onClick={() => toggleProjet(projet.id)}>
                                <span className="projet-emoji">{projet.emoji}</span>
                                <div className="projet-header-info">
                                    <div className="projet-nom">{projet.nom}</div>
                                    <div className="projet-periode-header">{projet.periode}</div>
                                </div>
                                <FaChevronDown className="projet-chevron" />
                            </div>
                            <div className="projet-body">
                                <div className="projet-content">
                                    {/* Contexte */}
                                    <div className="projet-section">
                                        <div className="projet-section-titre">📋 Contexte</div>
                                        <p className="projet-texte">{projet.contexte.description}</p>
                                        <div className="info-grid">
                                            <div className="info-item">
                                                <div className="info-label">📅 Dates</div>
                                                <div className="info-value">{projet.contexte.dates}</div>
                                            </div>
                                            <div className="info-item">
                                                <div className="info-label">⏱️ Durée</div>
                                                <div className="info-value">{projet.contexte.duree}</div>
                                            </div>
                                            <div className="info-item">
                                                <div className="info-label">🎯 Objectifs</div>
                                                <div className="info-value">{projet.contexte.objectifs}</div>
                                            </div>
                                            <div className="info-item">
                                                <div className="info-label">⚠️ Contraintes</div>
                                                <div className="info-value">{projet.contexte.contraintes}</div>
                                            </div>
                                            <div className="info-item">
                                                <div className="info-label">👥 Équipe</div>
                                                <div className="info-value">{projet.contexte.equipe}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Démarche */}
                                    <div className="projet-section">
                                        <div className="projet-section-titre">🚀 Démarche &amp; Implication</div>
                                        <p className="projet-texte">{projet.demarche.description}</p>
                                        <div className="implication-bar">
                                            <span className="info-label" style={{ marginBottom: 0 }}>Implication</span>
                                            <div className="implication-level">
                                                {[1, 2, 3, 4, 5].map(n => (
                                                    <div key={n} className={`implication-dot ${n <= projet.demarche.implication ? 'filled' : ''}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="implication-bar">
                                            <span className="info-label" style={{ marginBottom: 0 }}>Autonomie</span>
                                            <div className="implication-level">
                                                {[1, 2, 3, 4, 5].map(n => (
                                                    <div key={n} className={`implication-dot ${n <= projet.demarche.autonomie ? 'filled' : ''}`} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* AC associés avec justifications */}
                                    <div className="projet-section">
                                        <div className="projet-section-titre">🎓 Apprentissages Critiques associés</div>
                                        {projet.ac.map((group) => (
                                            <div key={group.comp} style={{ marginBottom: '0.75rem' }}>
                                                <div className="badges-container">
                                                    {group.items.map((item, i) => (
                                                        <span key={`${group.comp}-${i}`} className={`badge-competence badge-${group.comp}`}>
                                                            {group.comp.toUpperCase()} · {item}
                                                        </span>
                                                    ))}
                                                </div>
                                                {group.justification && (
                                                    group.justification.startsWith('[À compléter')
                                                        ? <p className="justification-placeholder">⚠️ {group.justification}</p>
                                                        : <p className="justification">→ {group.justification}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* CE associés */}
                                    <div className="projet-section">
                                        <div className="projet-section-titre">🧩 Composantes Essentielles associées</div>
                                        <div className="badges-container">
                                            {projet.ce.map((group) =>
                                                group.items.map((item, i) => (
                                                    <span key={`${group.comp}-ce-${i}`} className={`badge-competence badge-${group.comp}`}>
                                                        {group.comp.toUpperCase()} · {item}
                                                    </span>
                                                ))
                                            )}
                                        </div>
                                    </div>

                                    {/* Cours */}
                                    <div className="projet-section">
                                        <div className="projet-section-titre">📚 Éléments de cours associés</div>
                                        <div className="cours-list">
                                            {projet.cours.map((cours, i) => (
                                                <span key={i} className="cours-tag">{cours}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Traces */}
                                    {projet.traces.length > 0 && (
                                        <div className="projet-section">
                                            <div className="projet-section-titre">🔗 Traces</div>
                                            <div className="traces-list">
                                                {projet.traces.map((trace, i) => (
                                                    <a key={i} className="trace-link" href={trace.url} target="_blank" rel="noopener noreferrer">
                                                        {trace.label} <FaExternalLinkAlt size={12} />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Étiquettes tech */}
                                    <div className="projet-etiquettes">
                                        {projet.etiquettes.map((tag, i) => (
                                            <span key={i} className="projet-etiquette">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
