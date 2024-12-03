import { HiCode, HiLink } from "react-icons/hi"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Project from "../../components/Project"
import projects from "../../responses/projects"

const Projects = () => {
    return(
        <div className="bg-white">
            <Navbar />
            <div className="text-blue-950 bg-white mx-auto px-3 mt-20 w-full md:w-3/4">
                <h1 className="text-xl lg:text-3xl text-center font-semibold">My Projects 📂</h1>
                <div className="my-5 flex flex-row justify-center items-center gap-3 flex-wrap">
                    {
                        projects.map((project, idx) => (
                            <Project 
                                key={idx}
                                image={project.image}
                                name={project.name}
                                desc={project.description}
                                category={project.category}
                                stacks={project.stacks.map((stack, idx) => (
                                    <img
                                        key={idx}
                                        src={stack}
                                        className="w-6 bg-slate-200 p-1 rounded-lg"
                                    /> 
                                ))}
                                linkRepo={
                                    project.repo ? (
                                        <a href={project.repo} target="_blank">
                                            <HiCode className="w-7 h-7 p-1 bg-slate-200 text-slate-800 rounded-lg" />
                                        </a>
                                    ) : ""
                                }
                                linkDeploy={
                                    project.link ? (
                                        <a href={project.link} target="_blank">
                                            <HiLink className="w-7 h-7 p-1 bg-slate-200 text-slate-800 rounded-lg" />
                                        </a>
                                    ) : ""
                                }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects