import Navbar from "../../components/Navbar"

const NotFound = () => {
    return(
        <div className="bg-white">
            <Navbar />
            <div className="h-screen flex flex-cols justify-center items-center mx-auto text-blue-950">
                <p className="font-semibold text-lg">Page Not Found</p>
            </div>
        </div>
    )
}

export default NotFound