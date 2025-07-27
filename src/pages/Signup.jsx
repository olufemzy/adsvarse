import React, { useState } from 'react'
import Quote from '../components/Quote'
import { Link } from 'react-router-dom'
import { RiArrowLeftSLine } from 'react-icons/ri'
import google from '../assets/google-icon.png'

const Signup = () => {
  return (
   <div className='bg-gray-100 py-10 md:py-20 signup'>
      <div className='mx-3 md:mx-[7%]'>
         <div className='flex flex-row justify-between md:space-x-20'>
            <Quote
               quoteContent='"Good marketing makes the company look smart. Great marketing makes the customer feel smart."' 
               author='-Joe Chernov'
            />
            <div className=' w-full md:w-[30%] '>
               <div className='flex flex-row items-center justify-between mb-20'>
                  <RiArrowLeftSLine className='inline'  />
                  <p className='h-fit text-right text-[15px]'> 
                     <span className='text-xs'>STEP 01/02</span> <br/>
                     Personal Info.
                   </p> 
               </div>
               <h1 className='text-2xl font-semibold'>
                  Register Individual Account!
               </h1>
               <p >
                  For the purpose of industry regulation, your details are required.
               </p>
               <form className='mt-10'>
                  <div className='flex flex-col space-y-2 mb-4'>
                     <label htmlFor="name" className='text-[14px]'>Your Fullname<sup>*</sup></label>
                     <input required type="text" id='name' className='px-5 py-3 bg-transparent border rounded-md' style={{borderColor: 'gray'}} placeholder='Emmanuel Agboje' />
                  </div>
                  <div className='flex flex-col space-y-2 mb-4'>
                     <label htmlFor="email" className='text-[14px]'>Email Address<sup>*</sup></label>
                     <input required type="email" id='email' className='px-5 py-3 bg-transparent border rounded-md' style={{borderColor: 'gray'}} placeholder='Enter email address' />
                  </div>
                  <div className='flex flex-col space-y-2 mb-4'>
                     <label htmlFor="password" className='text-[14px]'>Create Password<sup>*</sup></label>
                     <input required type="password" id='password' className='px-5 py-3 bg-transparent border rounded-md' style={{borderColor: 'gray'}} placeholder='Enter Password' />
                  </div>
                  <div className='mb-4'>
                     <input type="checkbox" id='checkbox' className='checkbox mr-2 border border-gray-300' />
                     <label htmlFor="checkbox">I agree to terms & conditions</label>
                  </div>
                  <button className='bg-[#0072E3] text-white w-full py-2 rounded-md mb-2'>
                     Register Account
                  </button>
                  <p className='text-center mb-2'>or</p>
               </form>
               <button className=' w-full py-2 rounded-md google flex items-center justify-center'>
                  <img src={google} alt="google-icon" className='mr-4' /> Register with Google
               </button>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Signup