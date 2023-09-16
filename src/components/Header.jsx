import React from 'react'
import TypeAnimation from './TypeAnimation'

function Header() {
  return (
   <div className='hidden sm:flex   justify-center sm:justify-between items-center '>
    <h1 className='text-xl font-bold sm:px-8 py-3'>MKCARPENTER</h1>
    
      <div >
         <ul className='space-x-8 hidden sm:flex sm:flex-row'>
          <li>Home</li>
          <li>About Me</li>
          <li>Service</li>
          <li>Contact US</li>
         </ul>
      </div>
   </div>
  )
}

export default Header