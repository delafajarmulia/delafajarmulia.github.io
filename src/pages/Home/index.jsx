import React from "react"
import { useNavigate } from "react-router"
import Navbar from "../../components/Navbar"
import TypingEffect from "../../components/TypingEffect"

const Home = () => {
    const navigate = useNavigate()

    return(
        <div className="bg-white">
            <Navbar />
            <div className="text-blue-950 bg-white h-screen flex flex-cols justify-center items-center mx-auto gap-3 px-3 w-full md:w-3/4">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">Dela Fajar Mulia</h1>
                    <div className="flex flex-row justify-center lg:justify-start font-semibold text-lg md:text-2xl my-2">
                        <h2 className="">I'm a</h2>
                        <span className="pl-1.5">
                            <h2 className="text-yellow-400">
                                <TypingEffect text="Junior Web Developer" />
                            </h2>
                        </span>
                        {/* <h2 className="text-yellow-400 pl-1">Junior Web Developer</h2> */}
                    </div>
                    <p className="text-sm md:text-lg">
                        I am a <strong>Fullstack Web Developer</strong> from Indonesia, 
                        I have a strong understanding of programming languages and have experience in <strong>Web Developer</strong> projects.
                    </p>
                    <button 
                        className="border-2 border-blue-950 p-3 rounded-xl mt-4 mb-5 font-semibold text-sm md:text-md hover:bg-blue-950 hover:text-white"
                        onClick={() => {navigate("/about")}}
                    >
                        See More About Me 🚀
                    </button>
                </div>
                <div className="hidden lg:block">
                    <img 
                        src="https://raw.githubusercontent.com/delafajarmulia/delafajarmulia.github.io/master/src/assets/rocketHD.jpg"
                        alt="rocket" 
                        loading="lazy"
                        width={800}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home