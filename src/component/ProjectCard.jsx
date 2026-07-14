import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectCard.css"
function ProjectCard({ project }) {

    return (

        <div className="project-card">
            

            <img
                src={project.gambar}
                alt={project.judul}
            />
            <div className="project-content">
            <h2>{project.judul}</h2>

            <p className="deskripsi">{project.deskripsi}</p>

            <p>
                <strong>Tahun :</strong> {project.tahun}
            </p>

            <p className="status">{project.status}
            </p>
            <p className="judul-teknologi">Teknologi</p>

                <div className="tech-list">
           
                {project.teknologi.map((tech) => (

                    <span key={tech}>
                        {tech}
                    </span>

                ))}

                </div>
            </div>
            <div className="project-button">

            <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub />
                GitHub
            </a>

            <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
            >
                <FaExternalLinkAlt />
                Live Demo
            </a>

        </div>

        </div>

    )

}

export default ProjectCard