import { MdOutlineMail } from "react-icons/md"
import Navbar from "../../components/Navbar"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Footer from "../../components/Footer"

const Contact = () => {
    const contacts = [
        {
            icon: <MdOutlineMail size={24} />,
            name: "dela.fjr08@gmail.com",
            link: "mailto:dela.fjr08@gmail.com"
        },
        {
            icon: <FaLinkedin size={24} />,
            name: "Dela Fajar Mulia",
            link: "https://www.linkedin.com/in/dela-fajar-mulia-6a6946301/"
        },
        {
            icon: <FaGithub size={24} />,
            name: "delafajarmulia",
            link: "https://www.github.com/delafajarmulia/"
        },
        {
            icon: <FaInstagram size={24} />,
            name: "delafjr.dev",
            link: "https://www.instagram.com/delafjr.dev/"
        }
    ]

    return(
        <div className="bg-white">
            <Navbar />
            <div className="text-blue-950 bg-white mx-auto px-3 mt-20 w-full md:w-3/4">
                <h1 className="text-xl lg:text-3xl text-center font-semibold">Let's Connect 📲</h1>
                <p className="text-center mt-5">
                    Connection is the key to personal and career success. 
                    Sometimes, reaching out and taking someone's hand is the beginning of a journey
                </p>
                <div className="flex flex-wrap gap-3 items-center justify-center mt-5">
                    {
                        contacts.map((contact, idx) => (
                            <a href={contact.link} key={idx} target="_blank">
                                <div className="flex items-center gap-2 dark:text-slate-800 bg-blue-200 py-2 px-3 rounded-lg">
                                    {contact.icon}
                                    <p className="lg:text-sm text-xs font-semibold">
                                    {contact.name}
                                    </p>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Contact