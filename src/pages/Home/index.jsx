import { useNavigate } from "react-router"
import Navbar from "../../components/Navbar"
import TypingEffect from "../../components/TypingEffect"
import Footer from "../../components/Footer"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiArrowRight } from "react-icons/hi"

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="page-wrapper min-h-screen flex flex-col">
            <Navbar />

            {/* Ambient orbs */}
            <div className="orb w-96 h-96 bg-violet-600/20 top-10 -left-32" />
            <div className="orb w-80 h-80 bg-blue-600/15 top-20 right-0" />
            <div className="orb w-64 h-64 bg-emerald-600/10 bottom-20 left-1/3" />

            <main className="flex-1 flex items-center justify-center px-4 pt-16">
                <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
                    {/* Text */}
                    <div className="relative z-10 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 badge mb-6 text-xs">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
                            Available for opportunities
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
                            <span className="text-white">Dela</span>{" "}
                            <span className="gradient-text">Fajar</span>
                            <br />
                            <span className="text-white">Mulia</span>
                        </h1>

                        <div className="text-xl md:text-2xl font-semibold text-slate-300 mb-6 h-8">
                            I'm a{" "}
                            <span className="gradient-text-2">
                                <TypingEffect
                                    texts={[
                                        "Fullstack Developer",
                                        "AI/ML Explorer",
                                        "IoT Enthusiast",
                                        "Lifelong Learner",
                                    ]}
                                />
                            </span>
                        </div>

                        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
                            A <strong className="text-slate-200">Fullstack Web Developer</strong> from Indonesia who loves building things for the web — and is always hungry to explore what's next, from <strong className="text-violet-300">AI/ML</strong> to <strong className="text-blue-300">IoT</strong>.
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            <button
                                onClick={() => navigate("/about")}
                                className="glow-btn flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm"
                            >
                                About Me <HiArrowRight />
                            </button>
                            <button
                                onClick={() => navigate("/projects")}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-300 text-sm border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all"
                            >
                                View Projects
                            </button>
                        </div>

                        <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
                            <a href="https://github.com/delafajarmulia" target="_blank" rel="noreferrer"
                                className="text-slate-500 hover:text-white transition-colors">
                                <FaGithub size={22} />
                            </a>
                            <a href="https://www.linkedin.com/in/dela-fajar-mulia-6a6946301/" target="_blank" rel="noreferrer"
                                className="text-slate-500 hover:text-blue-400 transition-colors">
                                <FaLinkedin size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Image / Visual */}
                    <div className="relative z-10 flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Glow ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/30 to-blue-500/20 blur-2xl scale-110" />
                            <div className="relative glass-card p-1.5 rounded-full w-64 h-64 md:w-80 md:h-80">
                                <img
                                    src="https://raw.githubusercontent.com/delafajarmulia/delafajarmulia.github.io/master/src/assets/dela.jpg"
                                    alt="Dela Fajar Mulia"
                                    loading="lazy"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            {/* Floating badges */}
                            <div className="absolute -bottom-4 -left-6 glass-card px-3 py-2 animate-float">
                                <p className="text-xs text-slate-400">Projects</p>
                                <p className="text-lg font-bold gradient-text">12+</p>
                            </div>
                            <div className="absolute -top-4 -right-6 glass-card px-3 py-2 animate-float" style={{ animationDelay: "2s" }}>
                                <p className="text-xs text-slate-400">Achievements</p>
                                <p className="text-lg font-bold gradient-text">9+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Home
