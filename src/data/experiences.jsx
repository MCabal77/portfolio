import {GoCode} from 'react-icons/go'
import {FaHandHoldingHeart} from 'react-icons/fa'
import {AiOutlineDatabase} from 'react-icons/ai'

export default [
  {
    title: 'Frontend Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo iure ad! Quas distinctio adipisci delectus, recusandae eligendi aspernatur minima.',
    icon: <FaHandHoldingHeart className='w-full h-full'/>, 
  }, 
  {
    title: 'Backend Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo iure ad! Quas distinctio adipisci delectus, recusandae eligendi aspernatur minima.',
    icon: <GoCode className='w-full h-full'/>,
  },
  {
    title: 'Data Management',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo iure ad! Quas distinctio adipisci delectus, recusandae eligendi aspernatur minima.',
    icon: <AiOutlineDatabase className='w-full h-full'/>,
  }
]