import { useState } from "react"
import Achivement from "../../components/Achivement"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import achivements from "../../responses/achivements"

const filters = ["all", "competition", "competence", "course"]

const Achivements = () => {
    const [active, setActive] = useState("all")
    const filtered = active === "all" ? achivements : achivements.filter(a => a.category === active)

    return (
        <div className="page-wrapper min-h-screen flex flex-col">
            <Navbar />

            <div className="orb w-96 h-96 bg-violet-600/15 top-10 left-0" />
            <div className="orb w-72 h-72 bg-blue-600/10 bottom-10 right-0" />

            <main className="flex-1 max-w-6xl mx-auto w-full px-4 pt-28 pb-10 relative z-10">
                <div className="text-center mb-10">
                    <h1 className="section-title gradient-text">Achievements</h1>
                    <p className="text-slate-400 mt-2">Certifications, competitions & courses</p>
                </div>

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
                    {filtered.map((a, idx) => (
                        <Achivement
                            key={idx}
                            image={a.image}
                            name={a.name}
                            organizer={a.organizer}
                            category={a.category}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Achivements
