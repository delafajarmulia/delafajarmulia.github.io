import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"

const year = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className="relative mt-20 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <span className="text-xl font-bold gradient-text">DFM</span>
                        <p className="text-slate-500 text-sm mt-1">Dela Fajar Mulia · Fullstack Developer</p>
                    </div>
                    <div className="flex items-center gap-3">
                        {[
                            { icon: <FaGithub size={18} />, href: "https://github.com/delafajarmulia" },
                            { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/dela-fajar-mulia-6a6946301/" },
                            { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/delafjr.dev/" },
                            { icon: <MdOutlineMail size={18} />, href: "mailto:dela.fjr08@gmail.com" },
                        ].map((s, i) => (
                            <a
                                key={i}
                                href={s.href}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-lg text-slate-400 hover:text-white glass-card hover:border-violet-500/30 transition-all"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                    <p className="text-slate-600 text-xs">© {year} · Built with 💜 in React</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
