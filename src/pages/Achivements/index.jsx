import Achivement from "../../components/Achivement"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import achivements from "../../responses/achivements"

const Achivements = () => {
    return(
        <div className="bg-white">
            <Navbar />
            <div className="text-blue-950 bg-white mx-auto px-3 w-full md:w-3/4">
                <h1 className="text-xl lg:text-3xl text-center font-semibold mt-20">My Achivements 🚀</h1>
                <div className="my-5 flex flex-row justify-center items-center gap-3 flex-wrap">
                    {
                        achivements.map((achivement, idx) => (
                            <Achivement
                                key={idx}
                                image={achivement.image}
                                name={achivement.name}
                                organizer={achivement.organizer}
                                category={achivement.category}
                            />
                        ))
                    }
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Achivements