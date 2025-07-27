import React, { useEffect, useState } from 'react'
import cta from '../assets/cta.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
      Aos.init({
        duration: 1000,
        // once: true,     //  animation should happen only once
      });
    }, []);
  // const [readmore, setReadmore] = useState(false)
  // setReadmore = () => !readmore

  return (
    <div className='py-12 bg-gray-100 '>
      <div className=' mx-3 md:mx-[7%]'>
        <h3 className=' section-head font-bold text-4xl text-gray-700 my-5 '>WHO WE ARE</h3>
        <p className='mb-10'>
          Adsvarse Hub is a next-generation digital marketing hub built to help brands thrive in an ever-evolving digital world. Fueled by intelligent automation and AI-driven systems, we deliver top-tier marketing services that are fast, focused, and future-ready. At Adsvarse Hub, we specialize in transforming businesses through data-driven strategies and cutting-edge AI technology, delivering marketing solutions that are not just efficient but exceptionally effective.
          <br />We are more than just a digital marketing agency – we are a smart hub designed to elevate brands. Our AI-powered systems streamline every aspect of marketing, from targeted ad campaigns and SEO optimization to content creation and customer engagement. This allows us to provide precision, speed, and scalability in ways traditional methods can’t match.
          <br />Our mission is simple: To empower businesses with intelligent marketing solutions that drive growth, enhance visibility, and deliver measurable results.

          <br /><br />Forget the guesswork — our AI-driven systems analyze, optimize, and automate your marketing efforts so you can focus on scaling. From sharp campaigns and killer content to real-time insights and strategic growth, we bring the tools, tech, and talent to help your brand stand out in the digital noise.
          <br />We're not your average agency — we're your growth partner, your tech stack upgrade, your secret weapon in a fast-moving digital world.
          <br />Marketing moves fast. We move faster. <br />
          
          <b>Welcome to Adsvarse Hub — the future of digital marketing, today. </b>
        </p>
        <img src={cta} alt="about" className='h-[500px] w-full object-cover object-top' data-aos='zoom-in' />
      </div>
    </div>
  )
}

export default About