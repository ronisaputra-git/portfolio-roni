import "./SkillCard.css"
import SkillCard from './SkillCard'
function Skills({ skills }) {

    return (

        <section id="skills">

            <h2>Skills</h2>

            <div className="skills-container">

                {skills.map((skill) => (

                    <SkillCard
                        key={skill.id}
                        skill={skill}
                    />

                ))}

            </div>

        </section>

    )
}

export default Skills