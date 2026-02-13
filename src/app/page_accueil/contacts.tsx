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
            <div className="container">
                <h2 className="section-title">Me Contacter</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item" data-delay="0">
                            <div className="contact-icon">
                                <MdMail />
                            </div>
                            <div className="contact-details">
                                <h4>Email</h4>
                                <a href="mailto:dimitripape1@gmail.com">dimitripape1@gmail.com</a>
                            </div>
                        </div>

                        <div className="contact-item" data-delay="100">
                            <div className="contact-icon">
                                <MdPhone />
                            </div>
                            <div className="contact-details">
                                <h4>Téléphone</h4>
                                <a href="tel:+33775773745">+33 7 75 77 37 45</a>
                            </div>
                        </div>
                        
                        <div className="contact-item" data-delay="200">
                            <div className="contact-icon">
                                <MdLocationPin />
                            </div>
                            <div className="contact-details">
                                <h4>Adresse</h4>
                                <a href="https://maps.app.goo.gl/zvxMB62Pp6QSSKTG8" target="_blank">
                                <p>Hôpitaux-Facultés</p>
                                <p>Montpellier</p>
                                </a>
                            </div>
                        </div>
                        
                        <div className="contact-item" data-delay="300">
                            <div className="contact-icon">
                                <FaLinkedin />
                            </div>
                            <div className="contact-details">
                                <h4>LinkedIn</h4>
                                <a className="cv-download" href="https://www.linkedin.com/in/dimitri-pape-8b4515246/"
                                    target="_blank">Dimitri
                                    Pape</a>
                            </div>
                        </div>
                        
                        <div className="contact-item" data-delay="400">
                            <div className="contact-icon">
                                <FaGithub />
                            </div>
                            <div className="contact-details">
                                <h4>GitHub</h4>
                                <a className="cv-download" href="https://github.com/Bourinou" target="_blank">Bourinou</a>
                            </div>
                        </div>
                        
                        <div className="contact-item" data-delay="500">
                            <div className="contact-icon">
                                <MdDownload />
                            </div>
                            <div className="contact-details">
                                <h4>CV</h4>
                                <a className="cv-download" download="CV-Dimitri-Pape.pdf"
                                    href="CV-PAPE-DIMITRI.pdf">Télécharger</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}