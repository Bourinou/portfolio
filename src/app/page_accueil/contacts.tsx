import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa6";

import {
    MdMail,
    MdPhone,
    MdLocationPin,
    MdDownload
} from "react-icons/md";


export default function Contacts() {
    return (
        <section className="contact" id="contacts">
            <div className="conteneur">
                <h2 className="titre-section">Me Contacter</h2>
                <div className="contenu-contact">
                    <div className="infos-contact">
                        <div className="item-contact" data-delay="0">
                            <div className="icone-contact">
                                <MdMail />
                            </div>
                            <div className="details-contact">
                                <h4>Email</h4>
                                <a href="mailto:dimitripape1@gmail.com">dimitripape1@gmail.com</a>
                            </div>
                        </div>

                        <div className="item-contact" data-delay="100">
                            <div className="icone-contact">
                                <MdPhone />
                            </div>
                            <div className="details-contact">
                                <h4>Téléphone</h4>
                                <a href="tel:+33775773745">+33 7 75 77 37 45</a>
                            </div>
                        </div>

                        <div className="item-contact" data-delay="200">
                            <div className="icone-contact">
                                <MdLocationPin />
                            </div>
                            <div className="details-contact">
                                <h4>Adresse</h4>
                                <a href="https://maps.app.goo.gl/zvxMB62Pp6QSSKTG8" target="_blank">
                                    <p>Hôpitaux-Facultés</p>
                                    <p>Montpellier</p>
                                </a>
                            </div>
                        </div>

                        <div className="item-contact" data-delay="300">
                            <div className="icone-contact">
                                <FaLinkedin />
                            </div>
                            <div className="details-contact">
                                <h4>LinkedIn</h4>
                                <a className="telecharger-cv" href="https://www.linkedin.com/in/dimitri-pape-8b4515246/"
                                    target="_blank">Dimitri
                                    Pape</a>
                            </div>
                        </div>

                        <div className="item-contact" data-delay="400">
                            <div className="icone-contact">
                                <FaGithub />
                            </div>
                            <div className="details-contact">
                                <h4>GitHub</h4>
                                <a className="telecharger-cv" href="https://github.com/Bourinou" target="_blank">Bourinou</a>
                            </div>
                        </div>

                        <div className="item-contact" data-delay="500">
                            <div className="icone-contact">
                                <MdDownload />
                            </div>
                            <div className="details-contact">
                                <h4>CV</h4>
                                <a className="telecharger-cv" download="CV-Dimitri-Pape.pdf"
                                    href="CV-PAPE-DIMITRI.pdf">Télécharger</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}