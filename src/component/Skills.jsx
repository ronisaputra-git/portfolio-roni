import "./Skills.css";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt
} from "react-icons/fa";

function Skills({ skills }) {

    const icons = {
        HTML: <FaHtml5 className="html" />,
        CSS: <FaCss3Alt className="css" />,
        JavaScript: <FaJs className="javascript" />,
        React: <FaReact className="react" />,
        Git: <FaGitAlt className="git" />
    };
    const iconn = {
        "Artificial Intelligence (AI)":"🤖",
        "Computer Operational":"💻",
        "Microsoft Office":"📊" 
    };

    return (

        <section id="skills" className="skills" data-aos="zoom-in">

            <h2>My Skills</h2>

            <div className="skills-container">

                {skills.map((skill) => (

                    <div
                        className="skill-card"
                        key={skill.id}>
                        <div className="skill-icon">

                            {icons[skill.nama]}
                                <span className="skill-iconn">
                                    {iconn[skill.nama]}
                                </span>

                        </div>
                        <h3>{skill.nama}</h3>

                        <p>{skill.level}</p>

                    </div>

                ))}

            </div>

        </section>

    )

}

export default Skills;