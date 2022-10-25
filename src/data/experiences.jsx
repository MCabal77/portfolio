import {GoCode} from 'react-icons/go'
import {FaHandHoldingHeart} from 'react-icons/fa'
import {AiOutlineDatabase} from 'react-icons/ai'
import {IoLogoJavascript} from 'react-icons/io'

export default [
  {
    title: 'Frontend Development',
    description: 'React, Angular, Vue, Tailwind, Bootstrap, Next, Vite',
    icon: <FaHandHoldingHeart className='w-full h-full'/>, 
  }, 
  {
    title: 'Backend Development',
    description: 'Ruby on Rails, Django, Node.js, Nest.js, Express.js',
    icon: <GoCode className='w-full h-full'/>,
  },
  {
    title: 'Data Management',
    description: 'AWS, Google Cloud ',
    icon: <AiOutlineDatabase className='w-full h-full'/>,
  },
  {
    title: 'Languages',
    description: 'JavaScript, Python, Java, SQL, NoSQL, C#, Ruby',
    icon: <IoLogoJavascript className='w-full h-full'/>,
  }
]