import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"

const Tech = () => {
  return (
   
    <div>
      <motion.div
        variants={textVariant()}
        className="flex flex-col justify-center items-center mb-14"
      >
        <p>Here are some of the technologies I use the most on a daily basis</p>
        <span className='italic text-[14px] text-[#ffffff87]'> Click on the icons below and drag to see the effect. </span>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
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