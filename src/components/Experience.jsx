import { useContext } from "react"
import { IsDarkContext } from "../context/IsDarkContext"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import 'react-vertical-timeline-component/style.min.css'

import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"


const ExperienceCard = ({ experience }) => (

    <VerticalTimelineElement
    contentStyle={{background: "#1d1836", color: '#aaa6c3', boxShadow: '10px 10px 30px #212020c9'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
        <div className="flex justify-center items-center h-full w-full">
          <img src={experience.icon} alt={experience.company_name} 
          className="w-[100%] h-[100%]"
          />
        </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] 
      font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li 
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  const { darkMode } = useContext(IsDarkContext)

  return (
    <>
      <motion.div
        variants={textVariant()}
      >
    <p className={!darkMode ? `${styles.sectionSubText}` : `${styles.sectionSubTextBlack}`}
            onMouseEnter={ () => document.querySelector('#root').classList.add('content')
          }
          onMouseLeave={
            () => document.querySelector('#root').classList.remove('content')
          }
        >What I have done so far?</p>
        <h2 className={!darkMode ? `${styles.sectionHeadText}` : `${styles.sectionHeadTextBlack}`}
            onMouseEnter={ () => document.querySelector('#root').classList.add('content')
          }
          onMouseLeave={
            () => document.querySelector('#root').classList.remove('content')
          }
        >Work Experience.</h2>
        <p className='mt-4 text-secondary text-[17px] leading-[30px]'>My journey in programming is fueled by continuous learning and diverse project experiences—including freelance work where I handle frontend adaptability, bug fixing, backend database integration, and API development. Prior to my development career, I gained valuable skills and insights from roles in sales, logistics, and real estate, which enrich my approach to solving problems and collaborating in teams.
        </p>

      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline 
          lineColor={!darkMode ? 'white' : 'black'}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    
    </>
  )
}

export default SectionWrapper(Experience, "work")