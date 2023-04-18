import { BrowserRouter } from "react-router-dom";
// import { useContext } from "react";   **Refactoring Context
// import  { IsDarkContext }  from "./context/IsDarkContext";

import { useRef, useEffect, useState } from "react";

// New way to Call Context
import { useIsDarkContext } from "./hooks/useIsDarkContext";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components"

import audioSpace from "./assets/space.wav"

import useSound from "use-sound";


const App = () => {
  // const { darkMode } = useContext(IsDarkContext)
  const { darkMode } = useIsDarkContext() // Use Hook to refactoring

  // Play music 
  const [play, { stop }] = useSound(audioSpace, {volume: 0.2});

  // Using useState to keep the value of my element visibility
  const [myElementIsVisible, setMyElementIsVisible] = useState();

  // Using a ref to acess my DOM element
  const myRef = useRef();

  // Using useEffect and creating a new observer 
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setMyElementIsVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current)
  }, [])

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
          <div ref={myRef} className="relative z-0" onScroll={myElementIsVisible ? play() : stop()}
          >
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
  )
}

export default App
