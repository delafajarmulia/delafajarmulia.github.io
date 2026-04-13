import { useNavigate } from "react-router"
import Navbar from "../../components/Navbar"

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="page-wrapper min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <p className="text-8xl font-extrabold gradient-text mb-4">404</p>
                <h1 className="text-2xl font-bold text-white mb-2">Page Not Found</h1>
                <p className="text-slate-400 mb-8">Looks like this page doesn't exist.</p>
                <button
                    onClick={() => navigate("/")}
                    className="glow-btn px-6 py-3 rounded-xl font-semibold text-white text-sm"
                >
                    Back to Home
                </button>
            </div>
        </div>
    )
}

export default NotFound
