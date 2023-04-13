import { BrowserRouter } from "react-router-dom";
// import { useContext } from "react";   **Refactoring Context
// import  { IsDarkContext }  from "./context/IsDarkContext";

// New way to Call Context
import { useIsDarkContext } from "./hooks/useIsDarkContext";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components"

const App = () => {
  // const { darkMode } = useContext(IsDarkContext)
  const { darkMode } = useIsDarkContext() // Use Hook to refactoring
  
    return (
    <BrowserRouter>
      <div className={!darkMode ? 'relative z-0 bg-primary transition-all duration-700' : 'relative z-0 bg-white-100 transition-all duration-700'}>
          <div className={darkMode ? 'bg-hero-white bg-cover bg-no-repeat bg-center transition-all duration-700' : 'bg-hero-pattern bg-cover bg-no-repeat bg-right-bottom transition-all duration-700'}>
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
