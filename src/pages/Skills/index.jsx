import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Skill from "../../components/Skill"
import skills from "../../responses/skills"

const Skills = () => {
    return(
        <div className="bg-white">
            <Navbar />
            <div className="text-blue-950 bg-white mx-auto px-3 mt-20 w-full md:w-3/4">
                <h1 className="text-xl lg:text-3xl text-center font-semibold mt-5">Tech Stack That I Use 🎯</h1>
                <div className="my-5 flex flex-row justify-center items-center gap-3 flex-wrap">
                    {
                        skills.map((skill, idx) => (
                            <Skill 
                                key={idx}
                                logo={skill.logo}
                                name={skill.name}
                            />
                        ))
                    }
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Skills