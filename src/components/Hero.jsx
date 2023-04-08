import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} relative inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 cursor-auto`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <div
          onMouseEnter={ () => document.querySelector('#root').classList.add('content')
          }
          onMouseLeave={
            () => document.querySelector('#root').classList.remove('content')
          }
          >
            <h1 className={`${styles.heroHeadText}
            text-white`}>
              Hi, I'm <span className='text-[#915eff]'>Raphael</span>
            </h1>
          </div>
          <p className={`${styles.heroSubText} mt-2 text-white-100 md:text-lg`}
            onMouseEnter={ () => document.querySelector('#root').classList.add('content')
          }
          onMouseLeave={
            () => document.querySelector('#root').classList.remove('content')
          }
          >
          Welcome to my crafting table! This is where I do what I love most: programing beautiful and functional systems! <br />
          </p>
          <span className='italic text-[16px] text-[#ffffff87]'>
             Click on the image below and drag to see the effect. 
           </span>
        </div> 
      </div>
        <div className='cursor-move w-full h-full'
            onMouseEnter={ () => document.querySelector('#root').classList.add('content')
          }
          onMouseLeave={
            () => document.querySelector('#root').classList.remove('content')
          }
        >
          <ComputersCanvas />
        </div>

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'
          onMouseEnter={ () => document.querySelector('#root').classList.add('content')
          }
          onMouseLeave={
            () => document.querySelector('#root').classList.remove('content')
          }
        >
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div 
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
                
              />
            </div>
          </a>
        </div>
        
    </section>
  )
}

export default Hero