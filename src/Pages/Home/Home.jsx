import React from 'react'
import NavBar from '../../Component/NavBar/NavBar'
import { Link, Outlet } from 'react-router'
import Footer from '../../Component/Footer/Footer'
import Banner from '../../Component/Banner/Banner'
import Quality from '../../Component/Quality/Quality'
import { PiCoffeeFill } from 'react-icons/pi'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Quality/>

      <div className='bg-[url(https://i.ibb.co/jkJYdwHf/1.png)] h-[100vh] my-15 flex justify-center '>
        <div className='text-center mt-20'>
          <p>--- Sip & Savor ---</p>
          <h1 className='text-[#331A15] text-4xl'>Our Popular Products</h1>
          <Link to='/add-product' className='btn btn-soft bg-[#E3B577] text-white text-xl
          hover:bg-transparent hover:text-black my-4 outline-2'>Add Coffee <PiCoffeeFill size={20} /></Link>
        </div>
      </div>
    </div>
  )
}

export default Home
