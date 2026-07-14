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
                    href="mailto:emailkamu@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <MdEmail />
                    <span>roniisaputra652.com</span>
                </a>
                <a
                    href="https://wa.me/628xxxxxxxxxx"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaWhatsapp />
                    <span>+62 8239-331-2497</span>
                </a>
                 <p>
                    <FaGithub /> GitHub
                </p>
                <p>
                    <FaLinkedin /> LinkedIn
                </p>
                 <div className="location">

                    <FaLocationDot />

                    <span>Jakarta Barat, DKI Jakarta</span>

                </div>
            </div>

        </section>
    );
}

export default Contact;