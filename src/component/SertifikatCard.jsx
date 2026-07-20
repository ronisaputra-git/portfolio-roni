import "./SertifikatCard.css";
import { FaCertificate } from "react-icons/fa";

function SertifikatCard({ sertifikat }) {
    return (

        <div className="sertifikat-card">

        <div className="sertifikat-image-wrapper">

            <img
                src={sertifikat.image}
                alt={sertifikat.title}
                className="sertifikat-image"
            />

            <span className="sertifikat-badge">

                {sertifikat.category}

            </span>

        </div>

            <div className="sertifikat-content">

                <h3>{sertifikat.title}</h3>

                <p className="issuer">

                    <FaCertificate />

                    {sertifikat.issuer} • {sertifikat.year}

                </p>

                <p className="description">
                    {sertifikat.description}
                </p>

                <a
                    href={sertifikat.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sertifikat"
                >
                    Lihat Sertifikat
                </a>

            </div>

        </div>

    );
}

export default SertifikatCard;