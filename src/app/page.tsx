import APropos from "@/app/a-propos/a-propos";

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-container">
          <div>
            <h1 className="hero-name" data-text="Dimitri PAPE">Dimitri PAPE</h1>
            <div className="hero-details">
              <p className="hero-age"><span id="age"> ans</span></p>
              <p className="hero-title">Étudiant en BUT Informatique</p>
              <p className="hero-subtitle">Passionné de développement web et de technologies innovantes</p>
            </div>
            <div className="hero-cta">
              <a className="cta-button" href="#about">Découvrir mon profil</a>
              <a className="cta-button cta-secondary" href="#contact">Me contacter</a>
            </div>
          </div>
        </div>
      </section>
      <div>
        <APropos />
      </div>
    </>
  );
}
