import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyHeader from "./components/MyHeader"
import Reset from "./components/Reset"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import NotFound from "./pages/NotFound"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

function AppRoutes() {
  return (
    <>
      <Reset />
      <BrowserRouter>
        <MyHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />}/>
          <Route path="/Contato" element={<Contact />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
