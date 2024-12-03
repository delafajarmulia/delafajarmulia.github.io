import { FaCode } from "react-icons/fa"

const year = new Date().getFullYear()

const Footer = () => {
    return(
        <footer className="w-full mx-auto mt-auto py-4 bg-yellow-300">
            <div className="flex items-center justify-center gap-2 font-semibold text-blue-950 text-xs lg:text-sm">
                <p>Build</p>
                <FaCode size={18} />
                <p>
                    with 💖 by <span className="font-bold"><a href="https://github.com/delafajarmulia">Dela Fajar Mulia</a></span>.
                    &copy;
                    {year}
                </p>
            </div>
        </footer>
    )
}

export default Footer