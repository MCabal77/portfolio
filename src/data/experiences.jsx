import {GoCode} from 'react-icons/go'
import {FaHandHoldingHeart} from 'react-icons/fa'
import {AiOutlineDatabase} from 'react-icons/ai'
import {IoLogoJavascript} from 'react-icons/io'

export default [
  {
    title: 'Frontend Development',
    description: 'React, Vite, Tailwind, Next.js, HTML5, CSS',
    icon: <FaHandHoldingHeart className='w-full h-full'/>, 
  }, 
  {
    title: 'Backend Development',
    description: 'Node.js, Express.js, Nest.js',
    icon: <GoCode className='w-full h-full'/>,
  },
  {
    title: 'Data Management',
    description: 'PostgreSQL, RESTful APIs',
    icon: <AiOutlineDatabase className='w-full h-full'/>,
  },
  {
    title: 'Languages',
    description: 'JavaScript, TypeScript, Java, SQL, C++',
    icon: <IoLogoJavascript className='w-full h-full'/>,
  }
]