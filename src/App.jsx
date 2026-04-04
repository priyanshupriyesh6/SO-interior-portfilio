import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NotFound } from "./pages/NotFound"
import { Home } from "./pages/Home"
import { Intro } from "./pages/Intro"
import { Services } from "./pages/Services"
import { AboutUs } from "./pages/AboutUs"
import { Contact } from "./pages/Contact"
import { Projects } from "./pages/Projects"
import { Process } from "./pages/Process"
import { Founders } from "./pages/Founders"
import { ScrollToTop } from "./components/ScrollToTop"
import { CircularNavbar } from "./components/CircularNavbar"

function App() {
  return (
    <>
     <BrowserRouter>
       <CircularNavbar />
       <ScrollToTop />
       <Routes>
         <Route index element={<Intro />} />
         <Route path="/home" element={<Home />} />
         <Route path="/services" element={<Services />} />
         <Route path="/about-us" element={<AboutUs />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/process" element={<Process />} />
         <Route path="/founders" element={<Founders />} />
         <Route path="*" element={<NotFound />} /> 
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
