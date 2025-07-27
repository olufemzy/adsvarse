import React from 'react'
import Quote from '../components/Quote'
import { Link } from 'react-router-dom'
import { RiArrowLeftSLine } from 'react-icons/ri'

const Signin = () => {
  return (
   <div className='bg-gray-100 py-10 md:py-20'>
      <div className='mx-3 md:mx-[7%]'>
         <div className='flex flex-row justify-between md:space-x-20'>
            <Quote
               quoteContent='"Good marketing makes the company look smart. Great marketing makes the customer feel smart."' 
               author='-Joe Chernov'
            />
            <div className=' w-full md:w-[30%] '>
               <div className='flex flex-row items-center justify-between'>
                  <RiArrowLeftSLine className='inline'  />
                  <p className='h-fit text-right text-[15px]'> 
                     <span className='text-xs'>STEP 01/02</span> <br/>
                     Personal Info.
                   </p> 
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Signin