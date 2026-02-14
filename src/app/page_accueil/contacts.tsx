import Link from "next/link";
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
                        <div className="carte" data-delay="0">
                            <div className="icone-contact">
                                <MdMail />
                            </div>
                            <div className="details-contact">
                                <h4>Email</h4>
                                <p>
                                    <Link href="mailto:dimitripape1@gmail.com">dimitripape1@gmail.com</Link>
                                </p>
                            </div>
                        </div>

                        <div className="carte" data-delay="100">
                            <div className="icone-contact">
                                <MdPhone />
                            </div>
                            <div className="details-contact">
                                <h4>Téléphone</h4>
                                <p>
                                    <Link href="tel:+33775773745">+33 7 75 77 37 45</Link>
                                </p>
                            </div>
                        </div>

                        <div className="carte" data-delay="200">
                            <div className="icone-contact">
                                <MdLocationPin />
                            </div>
                            <div className="details-contact">
                                <h4>Adresse</h4>
                                <p>
                                    <Link href="https://maps.app.goo.gl/zvxMB62Pp6QSSKTG8" target="_blank">
                                        <p>Hôpitaux-Facultés</p>
                                        <p>Montpellier</p>
                                    </Link>
                                </p>

                            </div>
                        </div>

                        <div className="carte" data-delay="300">
                            <div className="icone-contact">
                                <FaLinkedin />
                            </div>
                            <div className="details-contact">
                                <h4>LinkedIn</h4>
                                <Link className="bouton-action" href="https://www.linkedin.com/in/dimitri-pape-8b4515246/"
                                    target="_blank">Dimitri
                                    Pape</Link>
                            </div>
                        </div>

                        <div className="carte" data-delay="400">
                            <div className="icone-contact">
                                <FaGithub />
                            </div>
                            <div className="details-contact">
                                <h4>GitHub</h4>
                                <Link className="bouton-action" href="https://github.com/Bourinou" target="_blank">Bourinou</Link>
                            </div>
                        </div>

                        <div className="carte" data-delay="500">
                            <div className="icone-contact">
                                <MdDownload />
                            </div>
                            <div className="details-contact">
                                <h4>CV</h4>
                                <Link className="bouton-action" download="CV-Dimitri-Pape.pdf"
                                    href="CV-PAPE-DIMITRI.pdf">Télécharger</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}