import React from 'react'

function ExperienceItem({title, icon, description}) {
  return (
    <div className=' bg-MAIN_COLOR hover:bg-MAIN_COLOR_DARKER hover:-translate-y-2 transition transform p-5 rounded-md flex flex-col flex-wrap'>
      <div className='text-STROKE_COLOR w-6 h-6 mb-3'>
        {icon}
      </div>
      <h1 className='font-semibold text-lg text-STROKE_COLOR mb-1'>{title}</h1>
      <p className='text-md text-BG_COLOR  flex-'>{description}</p>
    </div>
  )
}

export default ExperienceItem