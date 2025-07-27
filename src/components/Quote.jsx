import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import quotelogo from '../assets/footer-logo.png'
import quotebg from '../assets/quote-bg.jpg'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'

const Quote = ({quoteContent, author}) => {
   useEffect(() => {
      Aos.init({
         duration: 1000,
         // once: true,     // animation should happen only once
      });
   }, []);

  return (
   <div className='max-md:hidden w-1/2 h-[700px]  bg-cover bg-no-repeat bg-center text-white' style={{backgroundImage: `url(${quotebg})`}} data-aos='flip-right'> 
      <div className='p-16 px-[70px] h-full' style={{background: 'rgba(0,0,255,0.5)'}}>
         <img src={quotelogo} alt="site-logo" className='w-44 mb-40' />
         <p className='mb-20 w-4/5'>
            {quoteContent}
         </p>
         <p>
            {author}
            <IoCheckmarkDoneCircle className='ml-1 inline-block text-[#F39B0B]' />
         </p>
      </div>
   </div>
  )
}

export default Quote