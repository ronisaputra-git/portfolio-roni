import {TypeAnimation}from "react-type-animation"
import "./Hero.css"

function Hero({ nama, profesi, deskripsi, universitas }) {

    function tampilPesan() {
        alert("Terima kasih telah mengunjungi portfolio saya.")
    }

    return (
        <section id="hero" className="hero" data-aos="fade-up">

            <div className="hero-content">

                <div className="hero-left">

                    <p className="hero-subtitle">Halo, Saya</p>

                    <h1>{nama}</h1>
                   <h2 className="typing-text">
                    <TypeAnimation
                        sequence={[
                            "Fresh Graduate Teknik Informatika",
                            2000,
                            "Frontend Developer",
                            2000,
                            "React Developer",
                            2000,
                            "Web Developer",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h2>
                    <p>{deskripsi}</p>

                    <p>{universitas}</p>

                    <div className="hero-button">

                        <a href="/CV_RONI_SAPUTRA.pdf" download className="btn-download">Download CV</a>

                        <button
                                className="btn-contact"
                                onClick={() =>
                                    document
                                        .getElementById("contact")
                                        .scrollIntoView({
                                            behavior: "smooth"
                                        })
                                }>
                            Hubungi Saya
                        </button>

                    </div>

                </div>
                <div className="hero-tech">

                        <span>HTML</span>

                        <span>CSS</span>

                        <span>JavaScript</span>

                        <span>React</span>

                </div>
                <div className="hero-right">
                <div className="hero-image">

                    <img
                        src="/roni.jpg"
                        alt="Foto Profil"
                    />
                </div>
                </div>

            </div>

        </section>
    )
}

export default Hero