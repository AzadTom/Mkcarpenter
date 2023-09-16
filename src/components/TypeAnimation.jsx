import React, { useEffect, useState } from 'react'



function TypeAnimation() {




    const arr = ["BEDROOM","DOOR","CABINET","FURNITURE","ALL WOOD WORK!"]

    const [text, setText] = useState('Alamri');


    useEffect(()=>{


         setTimeout(()=>{

            const ind = Math.floor(Math.random() * arr.length)
            setText(arr[ind])
           

        },2000)


       


        
       

    },[text])

   

  return (
    <div className={`flex  sm:text-2xl lg:text-3xl font-semibold z-50 `}>

        <div>We do work for</div>
        <ul className='text-red-600 ml-2 dynamic'>
            <li><span>{text}</span></li>
        </ul>
    </div>
  )
}

export default TypeAnimation