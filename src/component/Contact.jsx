import { FaGithub,FaLinkedin,FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "./Contact.css";

function Contact() {
    return (
        <section id="contact" className="contact"data-aos="fade-left">

            <h2>Hubungi Saya</h2>

            <div className="contact-card">

                <a
                    href="mailto:roniisaputra256@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <MdEmail />
                    <span>roniisaputra256@gmail.com</span>
                </a>
                <a
                    href="https://wa.me/628239332497"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaWhatsapp />
                    <span>+62 823 9331 2497</span>
                </a>
                 <a  
                    href="https://github.com/ronisaputra-git"
                    target="_blank"
                    rel="noopener noreferrer">

                    <FaGithub /> ronisaputra-git
                </a>
                 <div className="location">

                    <FaLocationDot />

                    <span>Jakarta Barat, DKI Jakarta</span>

                </div>
            </div>

        </section>
    );
}

export default Contact;