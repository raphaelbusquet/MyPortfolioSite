import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { github, cv, linkedin, cvdoc } from '../assets'
import { Link } from 'react-router-dom'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    
    emailjs.send(
      'service_ezot80w',
      'template_wozpwp4',
      {
        from_name: form.name,
        to_name: 'Raphael',
        from_email: form.email,
        to_email: 'raphaelbusquet@outlook.com',
        message: form.message,
      }, '5njwZruXmD6i5-bur'
      ).then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');

        setForm({
          name: '',
          email: '',
          message: '',
        })

      }, (error) => {
        setLoading(false);

        console.log(error);

        alert('Something went wrong, please try again.');
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
          onMouseEnter={ () => document.querySelector('#root').classList.add('content')
        }
        onMouseLeave={
          () => document.querySelector('#root').classList.remove('content')
        }
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='5'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
          
        </form>

        <div className='flex justify-center items-center gap-2 mt-10'>

          <h3>Or try these links:</h3>
          <div className='flex justify-center gap-4'
            onMouseEnter={() => document.querySelector('#root').classList.add('content')
            }
            onMouseLeave={
            () => document.querySelector('#root').classList.remove('content')
            }
          >
            <div
              onClick={() => window.open('https://github.com/raphaelbusquet', "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github"
                className='w-1/2 h-1/2 object-contain' />
            </div>
  
            <div
              onClick={() => window.open('https://linkedin.com/in/raphaelbusquet', "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={linkedin} alt="linkedin"
                className='w-1/2 h-1/2 object-contain' />
            </div>
  
            <Link to={cvdoc} target='_blank' download
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={cv} alt="curriculum vitae"
                className='w-1/2 h-1/2 object-contain' />
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <div 
          className='w-full h-full cursor-move'
          onMouseEnter={ () => document.querySelector('#root').classList.add('content')
          }
          onMouseLeave={
            () => document.querySelector('#root').classList.remove('content')
          }
        >
          <EarthCanvas />
        </div>
      </motion.div>
    </div>  
  )
}

export default SectionWrapper(Contact, "contact")