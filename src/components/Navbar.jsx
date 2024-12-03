import { useState } from "react"
import { Link, useLocation } from "react-router"

const Navbar = () => {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false)
    const location = useLocation()

    const toggleMobileMenu = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible)
    }

    return(
        <nav className="w-full bg-white text-blue-950 font-medium fixed top-0 py-5">
            {/* toogle untuk mobile menu */}
            <div className="flex justify-end w-full px-5">
                <button id="menuToggle" className="lg:hidden focus:outline-none" onClick={toggleMobileMenu}>
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* for mobile */}
            <div 
                id="mobileMenu" 
                className={`lg:hidden mt-2 flex flex-col w-full text-left pl-3 gap-2 ${isMobileMenuVisible ? "" : "hidden"}`}
                >
                    <Link
                        className={`${location.pathname === "/" ? "text-yellow-400" : ""}`}
                        to={"/"}>
                            Home 🏡
                    </Link>
                    <Link
                        className={`${location.pathname === "/about" ? "text-yellow-400" : ""}`}
                        to={"/about"}>
                            About 😎
                    </Link>
                    <Link
                        className={`${location.pathname === "/skills" ? "text-yellow-400" : ""}`}
                        to={"/skills"}>
                            Skill 🎯
                    </Link>
                    <Link
                        className={`${location.pathname === "/projects" ? "text-yellow-400" : ""}`}
                        to={"/projects"}>
                            Project 📂
                    </Link>
                    <Link
                        className={`${location.pathname === "/achivements" ? "text-yellow-400" : ""}`}
                        to={"/achivements"}>
                            Achivement 🚀
                    </Link>
                    <Link
                        className={`${location.pathname === "/contact" ? "text-yellow-400" : ""}`}
                        to={"/contact"}>
                            Contact 📲
                    </Link>
            </div>

            {/* for desktop */}
            <div id="desktopMenu" className="hidden lg:flex lg:justify-end lg:px-16">
                <Link
                    className={`pr-5 ${location.pathname === "/" ? "text-yellow-400" : ""}`}
                    to={"/"}>
                        Home 🏡
                </Link>
                <Link
                    className={`pr-5 ${location.pathname === "/about" ? "text-yellow-400" : ""}`}
                    to={"/about"}>
                        About 😎
                </Link>
                <Link
                    className={`pr-5 ${location.pathname === "/skills" ? "text-yellow-400" : ""}`}
                    to={"/skills"}>
                        Skill 🎯
                </Link>
                <Link
                    className={`pr-5 ${location.pathname === "/projects" ? "text-yellow-400" : ""}`}
                    to={"/projects"}>
                        Project 📂
                </Link>
                <Link
                    className={`pr-5 ${location.pathname === "/achivements" ? "text-yellow-400" : ""}`}
                    to={"/achivements"}>
                        Achivement 🚀
                </Link>
                <Link
                    className={`pr-5 ${location.pathname === "/contact" ? "text-yellow-400" : ""}`}
                    to={"/contact"}>
                        Contact 📲
                </Link>
            </div>

        </nav>
    )
}

export default Navbar