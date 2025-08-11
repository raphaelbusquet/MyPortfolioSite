import { useContext } from 'react'
import { IsDarkContext } from '../context/IsDarkContext'
import Tilt from 'react-parallax-tilt' // dont use just react-tilt
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion' 

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div 
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github"
                className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>

        <div className='mt-3'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {

  const { darkMode } = useContext(IsDarkContext)

  return (
    <>
       <motion.div
        variants={textVariant()}
      >
        <div
          onMouseEnter={ () => document.querySelector('#root').classList.add('content')
        }
        onMouseLeave={
          () => document.querySelector('#root').classList.remove('content')
        }
        >
          <p className={!darkMode ? `${styles.sectionSubText}` : `${styles.sectionSubTextBlack}`}>My work</p>
          <h2 className={!darkMode ? `${styles.sectionHeadText}` : `${styles.sectionHeadTextBlack}`}>Some Projects.</h2>
        </div>

      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here are some of my favorite projects, you can check out more on my GitHub. <span className={!darkMode ? 'italic text-[14px] text-[#ffffff87]' : 'italic text-[14px] text-[#27262687]'}>Click on the Github icon to see the entire project.</span>
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'
        onMouseEnter={ () => document.querySelector('#root').classList.add('content')
      }
      onMouseLeave={
        () => document.querySelector('#root').classList.remove('content')
      }
      >
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`} 
          index={index}
          {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");