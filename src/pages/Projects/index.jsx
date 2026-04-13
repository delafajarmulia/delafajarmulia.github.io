import { useState } from "react"
import { HiCode, HiLink } from "react-icons/hi"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Project from "../../components/Project"
import projects from "../../responses/projects"

const filters = ["all", "web", "api", "desktop", "sql"]

const Projects = () => {
    const [active, setActive] = useState("all")

    const filtered = active === "all" ? projects : projects.filter(p => p.category === active)

    return (
        <div className="page-wrapper min-h-screen flex flex-col">
            <Navbar />

            <div className="orb w-96 h-96 bg-emerald-600/10 top-10 right-0" />
            <div className="orb w-72 h-72 bg-violet-600/10 bottom-10 left-0" />

            <main className="flex-1 max-w-6xl mx-auto w-full px-4 pt-28 pb-10 relative z-10">
                <div className="text-center mb-10">
                    <h1 className="section-title gradient-text">Projects</h1>
                    <p className="text-slate-400 mt-2">Things I've built along the way</p>
                </div>

                {/* Filter tabs */}
                <div className="flex flex-wrap gap-2 justify-center mb-10">
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setActive(f)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 capitalize ${
                                active === f
                                    ? "bg-violet-500/20 border border-violet-500/40 text-violet-300"
                                    : "text-slate-400 border border-white/10 hover:border-white/20 hover:text-white"
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-5">
                    {filtered.map((project, idx) => (
                        <Project
                            key={idx}
                            image={project.image}
                            name={project.name}
                            desc={project.description}
                            category={project.category}
                            stacks={project.stacks.map((stack, i) => (
                                <img
                                    key={i}
                                    src={stack}
                                    className="w-5 h-5 object-contain bg-white/10 p-0.5 rounded"
                                    loading="lazy"
                                />
                            ))}
                            linkRepo={
                                project.repo ? (
                                    <a href={project.repo} target="_blank" rel="noreferrer">
                                        <HiCode className="w-7 h-7 p-1.5 glass-card text-slate-300 hover:text-white rounded-lg" />
                                    </a>
                                ) : null
                            }
                            linkDeploy={
                                project.link ? (
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                        <HiLink className="w-7 h-7 p-1.5 glass-card text-slate-300 hover:text-white rounded-lg" />
                                    </a>
                                ) : null
                            }
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Projects
