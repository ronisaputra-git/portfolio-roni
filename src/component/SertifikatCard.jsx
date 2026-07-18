import { useState } from "react";
import "./SertifikatCard.css";
import { FaCertificate } from "react-icons/fa";

function SertifikatCard({ sertifikat }) {
    const [preview, setPreview] = useState(false);
    return (

        <div className="sertifikat-card">

        <div className="sertifikat-image-wrapper">

            <img
                src={sertifikat.image}
                alt={sertifikat.title}
                className="sertifikat-image"
                onClick={() => setPreview(true)}
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
            {preview && (

            <div
                className="preview-overlay"
                onClick={() => setPreview(false)}
            >

                <div
                    className="preview-box"
                    onClick={(e) => e.stopPropagation()}
                >

                    <button
                        className="close-preview"
                        onClick={() => setPreview(false)}
                    >
                        ✕
                    </button>

                    <img
                        src={sertifikat.image}
                        alt={sertifikat.title}
                        className="preview-image"
                    />

                </div>

            </div>

        )}

        </div>

    );
}

export default SertifikatCard;