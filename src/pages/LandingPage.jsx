import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaHdd } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { LuChartNoAxesCombined } from 'react-icons/lu';
import { TfiUser } from 'react-icons/tfi';
import hero from '../assets/hero-bg.jpg';
import item1 from '../assets/slide-item-1.jpg';
import item2 from '../assets/slide-item-2.jpg';
import item3 from '../assets/slide-item-3.jpg';
import item4 from '../assets/slide-item-4.jpg';
import item5 from '../assets/slide-item-5.jpg';
import item6 from '../assets/slide-item-6.jpg';
import item7 from '../assets/slide-item-7.jpg';
import item8 from '../assets/slide-item-8.jpg';
import item9 from '../assets/slide-item-9.jpg';
import item10 from '../assets/slide-item-10.jpg';
import service from '../assets/services.jpg'
import blog1 from '../assets/blog-1.jpg';
import blog2 from '../assets/blog-2.jpg';
import blog3 from '../assets/blog-3.jpg';
import blog4 from '../assets/blog-4.jpg';
import partner1 from "../assets/partner-1.jpg";
import partner2 from "../assets/partner-2.jpg";
import cta from '../assets/cta.jpg'



const LandingPage = () => {

   useEffect(() => {
    Aos.init({
      duration: 1000,
      // once: true,     //  animation should happen only once
    });
  }, []);

  const carouselImages = [
   item1, 
   item2, 
   item3, 
   item4, 
   item5, 
   item6, 
   item7, 
   item8, 
   item9, 
item10,
  ]

  return (
   <>
      {/* HERO SECTION */}
      <div className='hero bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${hero})`}} data-aos="zoom-in-down">
         <div className='max-md:py-5 md:h-[600px] flex items-center '>
            <div className=' p-2 md:p-5 mx-3 md:w-2/4 md:mx-auto my-0 text-center flex flex-col items-center justify-center'>
               <h1 className='text-white text-6xl font-bold'>
                  Promote Your <span className='badge'>Brand</span> where it matters most
               </h1>
               <p className='text-xl my-4 text-white'>
                  We specialize in creating innovative marketing strategies that drive results. 
                  Let us help you shine brighter in the digital landscape.
               </p>
               <div className='flex flex-row space-x-2 my-4'>
                  <Link to='/getstarted' className='bg-white rounded-md p-3 px-6'>Get Started</Link>
                  <Link to='/' className='bg-transparent border-e-white border-2 p-3 rounded-md text-white px-6'>Learn more</Link>
               </div>
            </div>
         </div>
      </div>

      {/* RESULTS SECTION */}
      <div className=' md:mx-[7%]' data-aos="zoom-in">
         <h3 className=' max-md:mx-3 section-head font-bold text-4xl text-gray-700 my-5 '>RESULTS</h3>
         <div className='px-3 flex flex-col md:flex-row justify-center md:items-center md:justify-between md:space-x-5 md:h-52 bg-gray-100 '>
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
      <div className='mx-3 md:mx-[7%] my-9' data-aos="zoom-in-left">      
         <h3 className=' section-head font-bold text-4xl text-gray-700 my-5 '>Promoted Ads Slides</h3>
      </div>
      <div className='carou flex space-x-2 w-full overflow-x-auto scroll-hidden whitespace-nowrap p-4 '>
         {carouselImages.map((images, index) => (
            <img src={images} key={index} alt=""  className='w-40 h-48 object-cover rounded' />
         ))}
      </div>

      {/* OUR SERVICE SECTION */}
      <div className='bg-gray-100 py-16 mt-10  'id='services'>
         <div className='mx-3 md:mx-[7%]'>      
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
                  <img src={service} alt="services" data-aos="zoom-in"/>
               </div>
               <div className='flex flex-col space-y-3 md:w-1/3'>
                  <div className='flex flex-row items-start space-x-5' data-aos="fade-up">
                     <span className='bg-blue-600 h-auto p-3 rounded-xl'>
                        <FaHdd color='white'/>
                     </span>
                     <div>
                        <h3 className='md:font-semibold font-bold'>Marketing Strategy</h3>
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
                        <h3 className='md:font-semibold font-bold'>Creative Content </h3>
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
                        <h3 className='md:font-semibold font-bold'>SEO & SEM Optimization</h3>
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
                        <h3 className='md:font-semibold font-bold'>Social Media Management</h3>
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
      <div className='mx-3 md:mx-[7%] py-16'>
         <h3 className=' section-head font-bold text-4xl text-gray-700 mb-10 ' data-aos="zoom-in-left">
            Proven Results
         </h3>
         {/* catalog */}
         {/* CATALOG 1 */}
         <div className=' flex flex-col md:flex-row md:space-x-9 max-md:space-y-2 mb-2'>
            <div className='flex flex-row items-center md:w-1/2 space-x-5 ' data-aos="flip-right">
               <img src={blog1} alt="blog-1" className='object-cover w-1/2 h-[400px]' />
               <div className='w-1/2'>
                  <h3 className=' text-3xl mb-4 '>Clothing / Fashion Brand.</h3>
                  <p className='mb-5'>
                     It has survived not only five centuries, but also the leap into electronic 
                     typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                     with the release of Letraset sheets containing Lorem Ipsum passages, and 
                     more recently with desktop publishing software.
                  </p>
                  <Link to='/' className='font-semibold'>Read More </Link>
               </div>
            </div>
            <div className='flex flex-row items-center md:w-1/2 space-x-5 ' data-aos="flip-right">
               <img src={blog2} alt="blog-2" className='object-cover w-1/2 h-[400px]' />
               <div className='w-1/2'>
                  <h3 className=' text-3xl mb-4 '>Luxury Lady Bags</h3>
                  <p className='mb-5'>
                     It has survived not only five centuries, but also the leap into electronic 
                     typesetting, remaining essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum passages, and more
                       recently with desktop publishing software.
                  </p>
                  <Link to='/' className='font-semibold'>Read More </Link>
               </div>
            </div>
         </div>
         {/* CATALOG 2 */}
         <div className=' flex flex-col md:flex-row md:space-x-9 max-md:space-y-2' data-aos="flip-right">
            <div className='flex flex-row items-center md:w-1/2 space-x-5 '>
               <img src={blog3} alt="blog-3" className='object-cover w-1/2 h-[400px]' />
               <div className='w-1/2'>
                  <h3 className=' text-3xl mb-4 '>High Speed Game Laptop</h3>
                  <p className='mb-5'>
                     It has survived not only five centuries, but also the leap into electronic 
                     typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                     with the release of Letraset sheets containing Lorem Ipsum passages, and 
                     more recently with desktop publishing software.
                  </p>
                  <Link to='/' className='font-semibold'>Read More </Link>
               </div>
            </div>
            <div className='flex flex-row items-center md:w-1/2 space-x-5 ' data-aos="flip-right">
               <img src={blog4} alt="blog-4" className='object-cover w-1/2 h-[400px]' />
               <div className='w-1/2'>
                  <h3 className=' text-3xl mb-4 '>Beautiful Hair Products.</h3>
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
         
      </div>

      {/* PARTNERS */}
      <div className='mx-3 md:mx-[7%]'>
         <h3 className=' section-head font-bold text-4xl text-gray-700 mb-10 ' data-aos="zoom-in-left">
            Partners
         </h3>
      </div>
      <div className='bg-gray-100'>
         <div className='mx-3 md:mx-[7%] flex flex-col md:flex-row max-md:space-y-10 md:space-x-10 pt-5 pb-32'>
            <div className='md:w-1/2 flex flex-col items-center' data-aos="zoom-in-right">
               <img src={partner1}  alt="partner1" className='w-[80%] relative z-10'/>
               <div className='p-badge flex flex-col relative z-[1] '>
                  <div className='bg-white px-5 py-8 '>
                     <p className='mb-6 font-semibold'>
                        "Their approach to social media marketing completely transformed our brand’s online presence. 
                        We couldn’t be happier with the results."
                     </p>
                     <h3>— Afolayan Kunle, Founder GreenSpace</h3>
                  </div>
               </div>
            </div>
            <div className='md:w-1/2 flex flex-col items-center' data-aos="zoom-in-left">
               <img src={partner2} alt="partner2" className='w-[80%] relative z-10'/>
               <div className='p-badge flex flex-col relative z-[1] '>
                  <div className='bg-white px-5 py-8 '>
                     <p className='mb-6 font-semibold'>
                     "ADSVARSE HUB helped us increase our web traffic by 300% in just six months! 
                     Their team is responsive, creative, and truly invested in our success."
                  </p>
                  <h3>— Babatunde Deola, CFO Pulse NG</h3>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* CALL TO ACTION SECTION */}
      <div className='bg-[#E2F2FF] py-14'>
         <div className='mx-3 md:mx-[7%] flex flex-col md:flex-row md:space-x-5 max-md:space-y-5 justify-between items-center'>
            <div>
               <h1 className='font-bold text-3xl mb-[5px]'>Ready to grow your business?</h1>
               <p className='mb-2'>Let Adsvarse help you reach your digital goals.</p>
               <Link to='/' className='bg-[#F39B0B] text-white p-2 px-7 rounded-md inline-block'>Contact Us</Link>
            </div>
            <img src={cta} alt="cta" className='md:w-1/2' data-aos="zoom-in"/>
         </div>
      </div>

      {/* TESTIMONIAL SECTION */}
      <div>
         <div className='mx-3 md:mx-[7%] py-16'>
            <div>
               <h3 className=' section-head font-bold text-4xl text-gray-700 mb-3' data-aos="zoom-in-left">
                  Testimonial
               </h3>
               <p>
                  Don't just take our word for it - see what actual users of our service have to say about 
                  their experience.
               </p>
            </div>
         </div>
      </div>
   </>
  )
}

export default LandingPage