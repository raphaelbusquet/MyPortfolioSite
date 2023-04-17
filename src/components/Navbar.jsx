import React, { useState, useContext } from 'react'
import { IsDarkContext } from '../context/IsDarkContext';
import { Link } from "react-router-dom"
import { BsSun, BsMoonStars } from "react-icons/bs";

import { styles } from "../styles"
import { navLinks } from '../constants'
import { logo, menu, close, logowhitetheme, menublack, closeblack, audioTheme, audioLink } from '../assets'

// Sound Effects
import useSound from 'use-sound';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  
  const { darkMode, setDarkMode } = useContext(IsDarkContext);

  
  const [playTheme] = useSound(audioTheme, { volume: 0.1 });
  const [playLink] = useSound(audioLink, { volume: 0.2 });
    
  return (
    <nav className={(!darkMode) ? `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary transition-all duration-700` : `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white transition-all duration-700`}> 
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/'
        className='flex items-center gap-2'
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}
        onMouseUp={playLink}
        >
          <img src={darkMode ? logowhitetheme : logo} alt="logo"
          className='w-14 h-14 object-contain'
          onMouseEnter={ () => document.querySelector('#root').classList.add('content')
          }
          onMouseLeave={
            () => document.querySelector('#root').classList.remove('content')
          }
          />
          <p className={(darkMode) ? 'text-[#212020c9] text-[18px] font-bold cursor-pointer flex' : 'text-white text-[18px] font-bold cursor-pointer flex'} 
          onMouseEnter={ () => document.querySelector('#root').classList.add('content')
          }
          onMouseLeave={
            () => document.querySelector('#root').classList.remove('content')
          }

          >

            Raphael Busquet&nbsp;
            <span className='sm:block hidden'>| Web Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10"
          onMouseEnter={ () => document.querySelector('#root').classList.add('content')
        }
        onMouseLeave={
          () => document.querySelector('#root').classList.remove('content')
        }
        >
          {navLinks.map((link) => (
            <li
            key={link.id}
            className={`${
              active === link.id ? 'text-white' : 'text-secondary'
            } ${(darkMode) ? ' hover:text-[#212020c9] text-[18px] font-medium cursor-pointer ' : 'hover:text-white text-[18px] font-medium cursor-pointer'}`}
            onClick={() => setActive(link.title)}
            onMouseUp={playLink}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={!darkMode ? (toggle ? close : menu) : (toggle ? closeblack : menublack)}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer sm:mr-10'
            onClick={() => setToggle(!toggle)}
             />

             <div className={!darkMode ? `${!toggle ? 'hidden' : 'flex' }
              p-6 black-gradient absolute top-20 right-0
              mx-4 my-2 min-w-[140px] z-10 rounded-xl
              ` : `${!toggle ? 'hidden' : 'flex' }
              p-6 menu-violet-gradient absolute top-20 right-0
              mx-4 my-2 min-w-[140px] z-10 rounded-xl
             `}>
                <ul className='list-none flex justify-end items-start flex-col gap-4'
                  onMouseEnter={ () => document.querySelector('#root').classList.add('content')
                  }
                  onMouseLeave={
                    () => document.querySelector('#root').classList.remove('content')
                  }
                >
                  {navLinks.map((link) => (
                  <li
                  key={link.id}
                  className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                  }font-poppins font-medium cursor-pointer text-[16px] hover:text-white/80`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                  >
                  <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                  ))}
                </ul>
             </div>
        </div>

        <div
          onMouseEnter={ () => document.querySelector('#root').classList.add('content')
        }
        onMouseLeave={
          () => document.querySelector('#root').classList.remove('content')
        }
        >
          { (!darkMode) ? <BsSun onClick={() => setDarkMode(!darkMode)}
          onMouseUp={playTheme}
          className='themeicon cursor-pointer text-1xl hover:text-2xl absolute r-10 top-10 transition-all duration-300'/> : <BsMoonStars onClick={() => setDarkMode(!darkMode)}
          onMouseUp={playTheme}
          className='themeicon2 cursor-pointer font-bold hover:text-xl absolute r-10 top-10 transition-all duration-300'/> }
        </div>
      </div>
    </nav>
  )
}

export default Navbar

