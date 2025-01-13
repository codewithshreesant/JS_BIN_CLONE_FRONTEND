import React from 'react'
import HelpNavbar from './Navbar/HelpNavbar'
import { Outlet } from 'react-router-dom'
import BlogFooter from '../Blogs/BlogFooter'

function Help() {
  return (
    <div>
        <HelpNavbar />
        <Outlet />
        <BlogFooter/>
    </div>
  )
}

export default Help