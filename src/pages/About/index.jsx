// import dela from "../../assets/dela.jpg"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Timeline from "../../components/Timeline"
import educations from "../../responses/educations"

const About = () => {
    return(
        <div>
            <Navbar />
            <div className="text-blue-950 bg-white mx-auto px-3 w-full md:w-3/4">
                <div className="mt-20">
                    <h1 className="text-xl lg:text-3xl text-center font-semibold">It's More About Me 😎</h1>
                    <div className="mt-5 grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
                        <div className="flex justify-center">
                            <img 
                                src="https://raw.githubusercontent.com/delafajarmulia/delafajarmulia.github.io/master/src/assets/dela.jpg"
                                alt="dela" 
                                loading="lazy"
                                className="w-64 lg:w-72 h-64 lg:h-72 rounded-xl shadow-md lg:shadow-2xl"
                            />
                        </div>
                        <div className="text-justify lg:text-left pt-3 lg:pt-0 lg:w-full">
                            <p className="text-md antialiased leading-relaxed tracking-wide pt-2.5">
                                I'm a Software Engineering graduate from SMKN 1 Kandeman, where I was the top student in my department. 
                                Passionate about technology, I have expertise in Web Development, Desktop App Development, SDLC, MySQL, SQL Server, and UI/UX design with Figma. 
                            </p>
                            <p className="text-md antialiased leading-relaxed tracking-wide pt-2.5">
                                I developed a voting application with React for my school, which was successfully used for internal events.
                            </p>
                            <p className="text-md antialiased leading-relaxed tracking-wide pt-2.5">
                                Currently, I am eager to expand my skills in web development and looking for new opportunities.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h1 className="text-xl lg:text-3xl text-center font-semibold">My Education 🎓</h1>
                    <div className="relative border-l border-gray-400 max-w-2xl mx-auto mt-5">
                        {
                            educations.map((edu, idx) => (
                                <Timeline 
                                    key={idx}
                                    major={edu.major}
                                    school={edu.school}
                                    // description={edu.description}
                                    time={edu.time}
                                />
                            ))    
                        }
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default About