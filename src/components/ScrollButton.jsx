import React, { useState } from 'react'
import { arrowUpBlack, arrowUpWhite } from '../assets'

import { useIsDarkContext } from '../hooks/useIsDarkContext' 

import useSound from 'use-sound';
import { audioLink } from '../assets';

const ScrollButton = () => {

    const [playLink] = useSound(audioLink, { volume: 0.4 });

    const { darkMode } = useIsDarkContext();

    const toggleVisible = () => {
        const seta = document.querySelector('#seta')
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 1000) {
            seta.style.display = 'block'
            seta.style.right = '2rem'
        } 
        else if (scrolled <= 1000) {
            seta.style.display = 'block'
            seta.style.right = '-10rem'
        }
    }

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth' 
        })
        playLink()
    }

    window.addEventListener('scroll', toggleVisible)

  return (
    <div
    id='seta'
    className='flex justify-center items-end fixed right-10 bottom-10 cursor-pointer buttonUp'
    onMouseEnter={() => document.querySelector('#root').classList.add('content')
          }
    onMouseLeave={
    () => document.querySelector('#root').classList.remove('content')
    }
    >
        <img src={!darkMode ? arrowUpWhite : arrowUpBlack} alt="Scroll to top"
        onClick={scrollTop}
        className='w-14 h-14'
        />
    </div>
  )
}

export default ScrollButton
