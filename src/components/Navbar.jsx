import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router"

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/achivements", label: "Achievements" },
    { to: "/contact", label: "Contact" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav shadow-lg shadow-black/20" : "bg-transparent"}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-lg font-bold gradient-text">DFM</span>
                        <span className="hidden sm:block text-sm text-slate-400 font-medium">Dela Fajar Mulia</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    location.pathname === link.to
                                        ? "text-violet-300 bg-violet-500/10 border border-violet-500/20"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 h-4 flex flex-col justify-between">
                            <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                            <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                            <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-80 pb-4" : "max-h-0"}`}>
                    <div className="glass-card p-2 mt-2 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    location.pathname === link.to
                                        ? "text-violet-300 bg-violet-500/10 border border-violet-500/20"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
