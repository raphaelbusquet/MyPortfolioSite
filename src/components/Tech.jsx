import { useContext } from "react"
import { IsDarkContext } from "../context/IsDarkContext"

import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"

const Tech = () => {

  const { darkMode } = useContext(IsDarkContext)

  return (
   
    <div>
      <motion.div
        variants={textVariant()}
        className="flex flex-col justify-center items-center mb-14"
      >
        <p 
        className={!darkMode ? '' : 'text-black'}
        onMouseEnter={ () => document.querySelector('#root').classList.add('content')
        }
        onMouseLeave={
          () => document.querySelector('#root').classList.remove('content')
        }
        >Here are some of the technologies I use the most on a daily basis</p>
        <span className={!darkMode ? 'italic text-[14px] text-[#ffffff87]' : 'italic text-[14px] text-[#27262687]'}
        onMouseEnter={ () => document.querySelector('#root').classList.add('content')
        }
        onMouseLeave={
          () => document.querySelector('#root').classList.remove('content')
        }
        > Click on the icons below and drag to see the effect. </span>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 cursor-move"
        onMouseEnter={ () => document.querySelector('#root').classList.add('content')
      }
      onMouseLeave={
        () => document.querySelector('#root').classList.remove('content')
      }
      >
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech)