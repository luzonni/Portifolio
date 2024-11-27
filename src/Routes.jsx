import { BrowserRouter, Routes, Route } from "react-router-dom"
import Reset from "./components/Reset"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import ProjectPage from "./pages/ProjectPage"
import NotFound from "./pages/NotFound"
import DefaultPage from "./pages/DefaultPage"
import { ThemeProvider } from "styled-components"
import { useState } from "react"
import TogglerTheme from "./components/TogglerTheme"

function AppRoutes() {
  const valor = localStorage.getItem("theme");
  const [theme, setTheme] = useState(valor ? valor : 'light')
  const toggleTheme = () => {
    if(theme === 'dark') {
      setTheme('light')
    }else {
      setTheme('dark')
    }
  }
  localStorage.setItem("theme", theme);
  return (
    <ThemeProvider theme={{mode: theme}}>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultPage/>}>
            <Route index element={<Home />} />
            <Route path="/AboutMe" element={<AboutMe />}/>
            <Route path="/Project/:name" element={<ProjectPage />}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <TogglerTheme toggleTheme={toggleTheme}/>
    </ThemeProvider>
  )
}

export default AppRoutes
