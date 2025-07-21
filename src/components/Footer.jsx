import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  let year = new Date().getFullYear()

  console.log(year);

  return (
    <div className='bg-[#0F40B2] py-12'>
      <div className='md:mx-[7%] flex flex-col md:flex-row justify-between max-md:items-center max-md:text-center max-md:space-y-5 mb-6'>

        <Link to='/'>
          <img src="/footer-logo.png" alt="footer-logo" className='h-fit md:w-[250px] w-48 '  />
        </Link>

        <ul className='text-white'>
          <li className='hover:underline'>
            31 East London, Frankfurt
          </li>
          <li>
            <Link to='tel:+2349021561000' className='hover:underline' >+234 902 156 1000</Link>
          </li>
          <li>
            <Link to='mailto:info@adsvarse.com' className='hover:underline' >info@adsvarse.com</Link>
          </li>
        </ul>

        <ul className='text-white'>
          <li>
            <Link to='/about' className='hover:underline' >About Us</Link>
          </li>          
          <li>
            <Link to='/' className='hover:underline' >Our Services</Link>
          </li>          
          <li>
            <Link to='/' className='hover:underline' >Case Studies</Link>
          </li>          
          <li>
            <Link to='/' className='hover:underline' >Contact Us</Link>
          </li>          
        </ul>

        <ul className='text-white'>
          <li>
            <Link to='/' className='hover:underline' >Facebook</Link>
          </li>          
          <li>
            <Link to='/' className='hover:underline' >Instagram</Link>
          </li>          
          <li>
            <Link to='/' className='hover:underline' >Linkedin</Link>
          </li>          
          <li>
            <Link to='/' className='hover:underline' >X</Link>
          </li>          
        </ul>        
      </div>
      <div className='text-center text-white text-xs'>
        © {year} Adsvarse hub. All rights reserved.
      </div>
    </div>
  )
}

export default Footer