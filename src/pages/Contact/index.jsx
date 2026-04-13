import { MdOutlineMail } from "react-icons/md"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const contacts = [
    {
        icon: <MdOutlineMail size={22} />,
        label: "Email",
        name: "dela.fjr08@gmail.com",
        link: "mailto:dela.fjr08@gmail.com",
        color: "from-violet-500/20 to-violet-600/10",
        border: "border-violet-500/20 hover:border-violet-400/50",
        iconColor: "text-violet-400",
    },
    {
        icon: <FaLinkedin size={22} />,
        label: "LinkedIn",
        name: "Dela Fajar Mulia",
        link: "https://www.linkedin.com/in/dela-fajar-mulia-6a6946301/",
        color: "from-blue-500/20 to-blue-600/10",
        border: "border-blue-500/20 hover:border-blue-400/50",
        iconColor: "text-blue-400",
    },
    {
        icon: <FaGithub size={22} />,
        label: "GitHub",
        name: "delafajarmulia",
        link: "https://www.github.com/delafajarmulia/",
        color: "from-slate-500/20 to-slate-600/10",
        border: "border-slate-500/20 hover:border-slate-400/50",
        iconColor: "text-slate-300",
    },
    {
        icon: <FaInstagram size={22} />,
        label: "Instagram",
        name: "delafjr.dev",
        link: "https://www.instagram.com/delafjr.dev/",
        color: "from-pink-500/20 to-pink-600/10",
        border: "border-pink-500/20 hover:border-pink-400/50",
        iconColor: "text-pink-400",
    },
]

const Contact = () => {
    return (
        <div className="page-wrapper min-h-screen flex flex-col">
            <Navbar />

            <div className="orb w-96 h-96 bg-violet-600/15 top-10 right-0" />
            <div className="orb w-72 h-72 bg-blue-600/10 bottom-10 left-0" />

            <main className="flex-1 max-w-3xl mx-auto w-full px-4 pt-28 pb-10 relative z-10">
                <div className="text-center mb-14">
                    <h1 className="section-title gradient-text">Let's Connect</h1>
                    <p className="text-slate-400 mt-2 max-w-md mx-auto">
                        Connection is the key to personal and career success. Reach out — I'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contacts.map((c, i) => (
                        <a
                            key={i}
                            href={c.link}
                            target="_blank"
                            rel="noreferrer"
                            className={`glass-card p-5 flex items-center gap-4 border ${c.border} bg-gradient-to-br ${c.color} group`}
                        >
                            <div className={`p-3 rounded-xl bg-white/5 ${c.iconColor} group-hover:scale-110 transition-transform`}>
                                {c.icon}
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{c.label}</p>
                                <p className="text-white font-semibold text-sm mt-0.5">{c.name}</p>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-12 glass-card p-8 text-center">
                    <p className="text-2xl mb-2">👋</p>
                    <h3 className="text-white font-semibold text-lg">Open to Work</h3>
                    <p className="text-slate-400 text-sm mt-2 max-w-sm mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                    </p>
                    <a
                        href="mailto:dela.fjr08@gmail.com"
                        className="glow-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-white text-sm mt-5"
                    >
                        <MdOutlineMail size={18} /> Say Hello
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Contact
