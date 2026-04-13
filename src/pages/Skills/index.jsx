import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Skill from "../../components/Skill"
import skills from "../../responses/skills"

const categories = {
    "Languages": ["HTML", "CSS", "Javascript", "PHP", "C#"],
    "Frameworks & Libraries": ["ReactJS", "NextJS", "Laravel", "Express", ".NET", "TailwindCSS", "Prisma"],
    "Databases": ["MySQL", "SQL Server"],
    "Tools": ["Postman", "Figma"],
}

const Skills = () => {
    return (
        <div className="page-wrapper min-h-screen flex flex-col">
            <Navbar />

            <div className="orb w-96 h-96 bg-blue-600/15 top-10 left-0" />
            <div className="orb w-72 h-72 bg-violet-600/10 bottom-10 right-0" />

            <main className="flex-1 max-w-5xl mx-auto w-full px-4 pt-28 pb-10 relative z-10">
                <div className="text-center mb-14">
                    <h1 className="section-title gradient-text">Tech Stack</h1>
                    <p className="text-slate-400 mt-2">Technologies I work with</p>
                </div>

                <div className="space-y-10">
                    {Object.entries(categories).map(([cat, names]) => {
                        const catSkills = skills.filter(s => names.includes(s.name))
                        if (!catSkills.length) return null
                        return (
                            <div key={cat}>
                                <div className="flex items-center gap-3 mb-5">
                                    <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">{cat}</h2>
                                    <div className="flex-1 h-px bg-white/5" />
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {catSkills.map((skill, idx) => (
                                        <Skill key={idx} logo={skill.logo} name={skill.name} />
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Skills
