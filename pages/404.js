import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import {AiOutlineHome} from 'react-icons/ai'



const PageNotFound = () => {

  const [Timer, setTimer] = useState(false);


  setTimeout(()=>{
    setTimer(true)
  }, 6000)

  return (
    <div className='NotFoundContainer'>
        <div className="NotVideo">
            <video muted loop autoPlay>
              <source src="/404.mp4" type="video/mp4"/>
           
            
            </video>
        </div>
        <div className='ShowedNotFound'>


          <div className='ImageLink'>

             
              {
               Timer ? <Link href="/"> <AiOutlineHome className='HomeIcon' /> إرجع الهوم بسرعة</Link> : <></>
              }

          </div>
        </div>
    </div>
  )
}

PageNotFound.layout = 'L1'

export default PageNotFound
  