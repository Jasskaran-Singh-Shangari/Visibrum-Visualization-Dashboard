import React from 'react'

const Header = ({title, subtitle}) => {
  return (
    <div className='mb-5'>
      <h1 className='text-base-content text-2xl font-bold'>{title}</h1>
      <h3 className='text-cyan-600 text-sm font-semibold'>{subtitle}</h3>
    </div>
  )
}

export default Header
