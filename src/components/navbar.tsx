import React from 'react'
import logo from './images/logo.png'

const navbar:React.FC = () => {
  return (
    <div className='h-[60px] w-full '>
      <div>
        <img src={logo} alt="" />
      </div>

    </div>
  )
}

export default navbar
