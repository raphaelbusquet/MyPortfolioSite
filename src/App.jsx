import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import  { IsDarkContext }  from "./context/IsDarkContext";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components"

const App = () => {
  const { darkMode } = useContext(IsDarkContext)
  
    return (
    <BrowserRouter>
      <div className={!darkMode ? 'relative z-0 bg-primary' : 'relative z-0 bg-white-100'}>
          <div className={darkMode ? 'bg-hero-white bg-cover bg-no-repeat bg-center' : 'bg-hero-pattern bg-cover bg-no-repeat bg-right-bottom'}>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
  )
}

export default App
