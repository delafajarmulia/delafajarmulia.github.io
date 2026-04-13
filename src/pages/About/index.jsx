import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Timeline from "../../components/Timeline"
import educations from "../../responses/educations"
import { HiCode, HiLightBulb, HiChip } from "react-icons/hi"

const highlights = [
    { icon: <HiCode size={20} />, label: "Web Dev", desc: "My home base — full-stack with modern frameworks" },
    { icon: <HiLightBulb size={20} />, label: "AI / ML", desc: "Exploring machine learning and intelligent systems" },
    { icon: <HiChip size={20} />, label: "IoT", desc: "Curious about connecting the physical and digital world" },
]

const About = () => {
    return (
        <div className="page-wrapper min-h-screen flex flex-col">
            <Navbar />

            <div className="orb w-96 h-96 bg-violet-600/15 top-0 right-0" />
            <div className="orb w-72 h-72 bg-blue-600/10 bottom-20 left-0" />

            <main className="flex-1 max-w-5xl mx-auto w-full px-4 pt-28 pb-10 relative z-10">
                {/* Header */}
                <div className="text-center mb-14">
                    <h1 className="section-title gradient-text">About Me</h1>
                    <p className="text-slate-400 mt-2">Get to know the person behind the code</p>
                </div>

                {/* Bio section */}
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 mb-16">
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/30 to-blue-500/20 blur-xl" />
                            <img
                                src="https://raw.githubusercontent.com/delafajarmulia/delafajarmulia.github.io/master/src/assets/dela.jpg"
                                alt="Dela Fajar Mulia"
                                loading="lazy"
                                className="relative w-56 h-56 object-cover rounded-2xl border border-white/10"
                            />
                        </div>
                        <div className="glass-card p-4 w-full text-center">
                            <p className="text-white font-semibold">Dela Fajar Mulia</p>
                            <p className="text-violet-300 text-sm mt-0.5">Fullstack Developer</p>
                            <p className="text-slate-500 text-xs mt-1">📍 Indonesia</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="glass-card p-6">
                            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                                I'm a <strong className="text-white">Software Engineering</strong> graduate now pursuing a <strong className="text-violet-300">D4 degree in Computer Engineering Technology</strong> at Politeknik Negeri Semarang — always moving forward, always learning something new.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-sm md:text-base mt-3">
                                Web development is where I feel most at home, but I genuinely believe in <strong className="text-white">lifelong learning</strong>. I'm actively exploring <strong className="text-violet-300">AI/ML</strong> and <strong className="text-blue-300">IoT</strong> — not because I have to, but because I'm curious about how technology can solve real problems across every domain.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-sm md:text-base mt-3">
                                I'm open to any opportunity that challenges me to grow — whether it's building a web app, training a model, or wiring up a sensor. If there's something new to learn, I'm in.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {highlights.map((h, i) => (
                                <div key={i} className="glass-card p-4 flex flex-col gap-2">
                                    <div className="text-violet-400">{h.icon}</div>
                                    <p className="text-white text-sm font-semibold">{h.label}</p>
                                    <p className="text-slate-400 text-xs">{h.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div>
                    <div className="text-center mb-10">
                        <h2 className="text-2xl lg:text-3xl font-bold gradient-text">Education</h2>
                        <p className="text-slate-400 text-sm mt-2">My academic journey</p>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        {educations.map((edu, idx) => (
                            <Timeline
                                key={idx}
                                major={edu.major}
                                school={edu.school}
                                description={edu.description}
                                time={edu.time}
                                icon={edu.icon}
                                current={edu.current}
                            />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default About
