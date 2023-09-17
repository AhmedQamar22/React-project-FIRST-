import React from 'react'
import Navbar from '../Commponents/Navbar/Navbar'
import Footer from '../Commponents/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
