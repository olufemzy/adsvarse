import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Quote from '../components/Quote';
import individual from '../assets/individual.png'
import business from '../assets/business.png'
import { FaArrowRight } from 'react-icons/fa';

const GetStarted = () => {

   useEffect(() => {
      Aos.init({
         duration: 1000,
         // once: true,     //  animation should happen only once
      });
   }, []);
      
  return (
   <div className='bg-gray-100 py-10 md:py-20'>
      <div className='mx-3 md:mx-[7%]'>
         <div className='flex flex-row justify-between md:space-x-20'>
            <Quote 
               quoteContent='"Doing business without advertising is like winking at a girl in the dark. 
            You know what you are doing, but nobody else does."' 
               author='-Stuart H. Britt'
            />
            <div className=' w-full md:w-[30%] '>
               <p className='text-right mb-24'> Already have an account? <Link to='/signin' className='text-blue-800 font-semibold'>Sign in </Link> </p> 
               <h2 className='mt-10 text-3xl font-semibold'>Join Us!</h2>
               <p className='mb-28'>To begin this journey, tell us what type of account you'd be opening.</p>
               <div className=' flex flex-col justify-end items-center space-y-2 '>
                  <Link to='/signin' className='flex flex-row space-x-3 justify-center items-center border transition-[border] hover:border-2 hover:border-blue-400 p-5 rounded-md'>
                     <img src={individual} alt="individual" className='w-8 ' />
                     <p>
                        <span className='font-semibold'>Individual</span> <br />
                        Personal account to manage all you activities.
                     </p>
                     <FaArrowRight color='#60a5fa' className='h-fit w-fit'/>
                  </Link>
                  <Link to='/' className='flex flex-row space-x-3 justify-center items-center border transition-[border] hover:border-2 hover:border-blue-400 p-5 rounded-md'>
                     <img src={business} alt="individual" className='w-8 ' />
                     <p>
                        <span className='font-semibold'>Business</span> <br />
                        Own or belong to a company, this is for you.
                     </p>
                     <FaArrowRight color='#60a5fa' className='h-fit w-fit'/>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default GetStarted