import React, { useContext } from 'react'
import { IsDarkContext } from '../context/IsDarkContext'

const Footer = () => {

  const { darkMode } = useContext(IsDarkContext) 

  return (

    <div className='w-full h-10 m-0 flex justify-center items-center'
        onMouseEnter={ () => document.querySelector('#root').classList.add('content')
        }
        onMouseLeave={
          () => document.querySelector('#root').classList.remove('content')
        }
    >
        <p className={!darkMode ? 'italic text-[16px] text-[#ffffff87]' : 'italic text-[16px] text-[#27262687]'}>Developed by &nbsp;<span><a className='hover:text-[#c6c6c6] transition-all duration-500' href="https://github.com/raphaelbusquet" target='_blank'>&reg;Raphael Busquet</a></span></p>
    </div>
  )
}

export default Footer