import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaHdd } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { LuChartNoAxesCombined } from 'react-icons/lu';
import { TfiUser } from 'react-icons/tfi';



const LandingPage = () => {

   useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration
      // once: true,     // whether animation should happen only once
    });
  }, []);

  const carouselImages = [
   '/slide-item-1.jpg',
   '/slide-item-2.jpg',
   '/slide-item-3.jpg',
   '/slide-item-4.jpg',
   '/slide-item-5.jpg',
   '/slide-item-6.jpg',
   '/slide-item-7.jpg',
   '/slide-item-8.jpg',
   '/slide-item-9.jpg',
   '/slide-item-10.jpg',
  ]

  return (
   <>
      {/* HERO SECTION */}
      <div className='hero bg-cover bg-no-repeat bg-center' data-aos="zoom-in-down">
         <div className='max-md:py-5 md:h-[500px] flex items-center '>
            <div className=' p-2 md:p-5 mx-3 md:w-2/4 md:mx-auto my-0 text-center flex flex-col items-center justify-center'>
               <h1 className='text-white text-6xl font-bold'>
                  Promote Your <span className='badge'>Brand</span> where it matters most
               </h1>
               <p className='text-xl my-4 text-white'>
                  We specialize in creating innovative marketing strategies that drive results. 
                  Let us help you shine brighter in the digital landscape.
               </p>
               <div className='flex flex-row space-x-2 my-4'>
                  <Link to='/' className='bg-white rounded-md p-3'>Get Started</Link>
                  <Link to='/' className='bg-transparent border-e-white border-2 p-3 rounded-md text-white'>Learn more</Link>
               </div>
            </div>
         </div>
      </div>

      {/* RESULTS SECTION */}
      <div className=' md:mx-14' data-aos="zoom-in">
         <h3 className=' section-head font-bold text-4xl text-gray-700 my-5 '>RESULTS</h3>
         <div className='flex flex-col md:flex-row justify-center md:items-center md:justify-between md:space-x-5 md:h-52 bg-gray-100 '>
            <div className='flex flex-row items-center md:w-1/4 max-md:my-5'>
               <h1 className='font-bold text-5xl'>
                  <span className='text-blue-600'>$2M</span>
                  <span className='text-orange-600'>+</span>
               </h1>
               <p className='text-2xl text-gray-900 mx-1'>Ad Revenue Generated</p>
            </div>
            <div className='flex flex-row items-center md:w-1/4 max-md:my-5 '>
               <h1 className='font-bold text-5xl'>
                  <span className='text-blue-600'>300</span>
                  <span className='text-orange-600'>+</span>
               </h1>
               <p className='text-2xl text-gray-900 mx-1'>Successful Campaigns</p>
            </div>
            <div className='flex flex-row items-center md:w-1/4 max-md:my-5 '>
               <h1 className='font-bold text-5xl'>
                  <span className='text-blue-600'>500</span>
                  <span className='text-orange-600'>%</span>
               </h1>
               <p className='text-2xl text-gray-900 mx-1'>Increase in Organic Traffic</p>
            </div>
         </div>
      </div>

      {/* PROMOTED ADS SLIDES */}
      <div className='mx-3 md:mx-16 my-9' data-aos="zoom-in-left">      
         <h3 className=' section-head font-bold text-4xl text-gray-700 my-5 '>Promoted Ads Slides</h3>
      </div>
      <div className='carou flex space-x-2 w-full overflow-x-auto scroll-hidden whitespace-nowrap p-4 scroll-images'>
         {carouselImages.map((images, index) => (
            <img src={images} key={index} alt=""  className='w-40 h-48 object-cover rounded' />
         ))}
      </div>

      {/* OUR SERVICE SECTION */}
      <div className='bg-gray-100 py-16 mt-10  '>
         <div className='mx-3 md:mx-16'>      
            <h3 className=' section-head font-bold text-4xl text-gray-700 mb-10 ' data-aos="zoom-in-left">
               Our Services
            </h3>
            <div className='flex flex-col md:flex-row items-center space-y-6 md:space-x-20'>
               <div className='md:w-1/2'>
                  <p className='mb-5'>
                     Adsvarse is a global platform that connects businesses of all sizes with people around the world. 
                     It’s proven to be a safe and trusted place for people to discover, connect with businesses and individuals.
                     Advarse gives you easy and flexible campaign management options and a variety of ad 
                     placements designed to drive visibility.
                  </p>
                  <img src="/services.png" alt="services" data-aos="zoom-in"/>
               </div>
               <div className='flex flex-col space-y-3 md:w-1/3'>
                  <div className='flex flex-row items-start space-x-5' data-aos="fade-up">
                     <span className='bg-blue-600 h-auto p-3 rounded-xl'>
                        <FaHdd color='white'/>
                     </span>
                     <div>
                        <h3 className='font-semibold'>Marketing Strategy</h3>
                        <p>Using the power of analytics and AI, we tailor 
                           campaigns that deliver measurable 
                           results and reach your target audience effectively.</p>
                     </div>
                  </div>
                  <div className='flex flex-row items-start space-x-5' data-aos="fade-up" >
                     <span className='bg-blue-600 h-auto p-3 rounded-xl'>
                        <HiLightBulb color='white'/>
                     </span>
                     <div>
                        <h3 className='font-semibold'>Creative Content </h3>
                        <p>
                           Using the power of analytics and AI, we tailor campaigns that deliver 
                           measurable results and reach your target audience effectively.
                        </p>
                     </div>
                  </div>
                  <div className='flex flex-row items-start space-x-5' data-aos="fade-up">
                     <span className='bg-blue-600 h-auto p-3 rounded-xl'>
                        <LuChartNoAxesCombined color='white'/>
                     </span>
                     <div>
                        <h3 className='font-semibold'>SEO & SEM Optimization</h3>
                        <p>
                           Using the power of analytics and AI, we tailor campaigns that 
                           deliver measurable results and reach your target audience effectively.
                        </p>
                     </div>
                  </div>
                  <div className='flex flex-row items-start space-x-5' data-aos="fade-up">
                     <span className='bg-blue-600 h-auto p-3 rounded-xl'>
                        <TfiUser  color='white'/>
                     </span>
                     <div>
                        <h3 className='font-semibold'>Social Media Management</h3>
                        <p>
                           Using the power of analytics and AI, we tailor campaigns that deliver
                           measurable results and reach your target audience effectively.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* PREOVEN RESULTS */}
      {/* <div className='mx-3 md:mx-16 py-16'>
         <h3 className=' section-head font-bold text-4xl text-gray-700 mb-10 ' data-aos="zoom-in-left">
            Proven Results
         </h3>
         catalog
         <div>
            <div className='flex flex-row items-center space-x-4 w-1/2'>
               <img src="/slide-item-3.png" alt="" className='object-cover w-1/2 h-[400px]' />
               <div className='w-1/2'>
                  <h3 className=''>Clothing/Fashion Brand.</h3>
                  <p className='mb-5'>
                     It has survived not only five centuries, but also the leap into electronic 
                     typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                     with the release of Letraset sheets containing Lorem Ipsum passages, and 
                     more recently with desktop publishing software.
                  </p>
                  <Link to='/' className='font-semibold'>Read More </Link>
               </div>
            </div>
         </div>
      </div> */}

   </>
  )
}

export default LandingPage