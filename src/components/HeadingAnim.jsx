import React, { useEffect, useState } from 'react'



function HeadingAnim() {




    const arr = ["BEDROOM","DOOR","CABINET","FURNITURE","ALL WOOD WORK!"]

    const [text, setText] = useState('Alamri');


    useEffect(()=>{


         setTimeout(()=>{

            const ind = Math.floor(Math.random() * arr.length)
            setText(arr[ind])
           

        },2000)


       


        
       

    },[text])

   

  return (
    <div className="flex  text-3x sm:text-6xl font-semibold z-50 text-center justify-center my-16 ">

        <div>We do work for</div>
        <ul className='text-red-600 ml-2 dynamic'>
            <li><span>{text}</span></li>
        </ul>
    </div>
  )
}

export default HeadingAnim