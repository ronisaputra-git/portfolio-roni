import "./Project.css";
import ProjectCard from "./ProjectCard";
function Project(){
    const project = [
    {id : 1,
    judul : "Website portofolio",
    deskripsi : "Website ini di desain untuk menampilkan sebuah portofolio yang menarik",
    tahun: 2026,
    status: "Sedang Dikembangakan",
    teknologi : ["React", "css","javascript"],
    link: "https://github.com/ronisaputra-git/portfolio-roni",
    gambar: "/web_porto-roni.png",
    github:"https://github.com/ronisaputra-git/portfolio-roni",
    demo:"https://portfolio-roni-self.vercel.app"

    }
]
    return(
        <section id="project" className="project"data-aos="fade-up">
            <h2>Project</h2>
            <div className="project-container">
          {project.map((project) => (
           <ProjectCard  key={project.id}
            project={project}/>
            ))
          }  
          </div>
        </section>

    )
}
export default Project