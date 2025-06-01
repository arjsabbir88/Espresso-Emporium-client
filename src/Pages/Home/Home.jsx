import React from 'react'
import NavBar from '../../Component/NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../../Component/Footer/Footer'
import Banner from '../../Component/Banner/Banner'
import Quality from '../../Component/Quality/Quality'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Quality/>
    </div>
  )
}

export default Home
