import React from 'react'

function Aboutme({reverse}) {
  return (
    <div className={`flex justify-between flex-col-reverse  sm:${reverse} items-center`}>
        <div className='flex-1'>
        <p className="font-extralight  text-[16px]  z-50 p-6">
           Hello Mahesh Sharma from Gurgaon, Haryana, I have over a decade of
          experience specializing in various woodworking projects, and I'm
          passionate about creating stunning and functional woodwork that
          exceeds your expectations. Whether you have a specific project in mind
          or need assistance brainstorming ideas, I'm here to help bring your
          vision to life.
        </p>
        </div>
        <div className='flex-1'>
            <img src="https://images.pexels.com/photos/8961526/pexels-photo-8961526.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About-me"  className='w-full h-full'/>
        </div>
    </div>
  )
}

export default Aboutme