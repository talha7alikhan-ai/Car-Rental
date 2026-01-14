import React from 'react'

const Title = ({ title, subtitle, align }) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === 'left' && "md:items-start  md:text-left"}`}>
      <div>
        <h2 className='text-3xl font-semibold mb-2'>{title}</h2>
          <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-156'>{subtitle}</p>
      </div>
    </div>
    )
}

export default Title
