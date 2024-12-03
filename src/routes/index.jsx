import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Skills from "../pages/Skills"
import Projects from "../pages/Projects"
import Achivements from "../pages/Achivements"
import Contact from "../pages/Contact"
import NotFound from "../pages/NotFound"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/achivements" element={<Achivements />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router