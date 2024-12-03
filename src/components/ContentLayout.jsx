import Footer from "./Footer"
import Navbar from "./Navbar"

const ContentLayout = ({ children }) => {
    return(
        <div className="flex min-h-screen">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
        </div>
    )
}

export default ContentLayout