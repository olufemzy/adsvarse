import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Mainlayout = () => {
  return (
   <>
      <Header/>
      <Outlet/>
      <Footer/>
   </>
  )
}

export default Mainlayout