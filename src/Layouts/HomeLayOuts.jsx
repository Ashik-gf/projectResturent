import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer';

const HomeLayOuts = () => {
  return (
    <div className=' max-w-7xl ma-auto'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default HomeLayOuts