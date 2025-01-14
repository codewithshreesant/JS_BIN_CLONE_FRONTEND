import React from 'react'
import HelpNavbar from './Navbar/HelpNavbar'
import { Outlet } from 'react-router-dom'
import BlogFooter from '../Blogs/BlogFooter'
import Footer from '../Footer/Footer'

function Help() {
  return (
    <div>
        <HelpNavbar />
        <Outlet />
        <BlogFooter/>
        <Footer />
    </div>
  )
}

export default Help