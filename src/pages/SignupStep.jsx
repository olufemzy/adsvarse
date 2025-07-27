import React, { useState } from 'react'
import Quote from '../components/Quote'
import { Link } from 'react-router-dom'
import { RiArrowLeftSLine } from 'react-icons/ri'
import google from '../assets/google-icon.png'

const SignupStep = () => {
  return (
      <div className='bg-gray-100 py-10 md:py-20 signup'>
         <div className='mx-3 md:mx-[7%]'>
            <div className='flex flex-row justify-between md:space-x-20'>
               <Quote
                  quoteContent='"Stopping advertising to save money is like stopping your watch to save time.”' 
                  author='-Henry Ford'
               />
               <div className=' w-full md:w-[30%] '>
                  <div className='flex flex-row items-center justify-between mb-20'>
                     <RiArrowLeftSLine className='inline'  />
                     <p className='h-fit text-right text-[15px]'> 
                        <span className='text-xs'>STEP 02/02</span> <br/>
                        Residency Info
                     </p> 
                  </div>
                  <h1 className='text-2xl font-semibold'>
                     Complete Your Profile!
                  </h1>
                  <p >
                     For the purpose of industry regulation, your details are required.
                  </p>
                  <form className='mt-10'>
                     <div className='flex flex-col space-y-2 mb-4'>
                        <label htmlFor="phone_number" className='text-[14px]'>Phone number<sup>*</sup></label>
                        <input required type="number" name='phone_number' id='phone_number' className='px-5 py-3 bg-transparent border rounded-md' style={{borderColor: 'gray'}} placeholder='080********' />
                     </div>
                     <div className='flex flex-col space-y-2 mb-4'>
                        <label htmlFor="address" className='text-[14px]'>Email Address<sup>*</sup></label>
                        <input required type="text" name='address' id='address' className='px-5 py-3 bg-transparent border rounded-md' style={{borderColor: 'gray'}} placeholder='Please enter address' />
                     </div>
                     <div className='flex flex-col space-y-2 mb-4'>
                        <label htmlFor="country" className='text-[14px]'>Country of residence<sup>*</sup></label>
                        <input required type="text" name='country' id='country' className='px-5 py-3 bg-transparent border rounded-md' style={{borderColor: 'gray'}} placeholder='Enter Password' />
                     </div>
                     <div className='mb-4'>
                        <input type="checkbox" id='checkbox' className='checkbox mr-2 border border-gray-300' required />
                        <label htmlFor="checkbox">I agree to terms & conditions</label>
                     </div>
                     <button className='bg-[#0072E3] text-white w-full py-2 rounded-md mb-2'>
                       Save & Continue
                     </button>
                     <p className='text-center mb-2 text-sm'>
                        Your info is safely secure
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SignupStep