
import React from 'react'
import { Link } from 'react-router-dom'
import Davemin from '../../../../public/dave.min.svg'
import { CgArrowLongLeft } from "react-icons/cg";

function HelpNavbar() {
  return (
    <nav className='w-full flex justify-around bg-slate-100 h-[8vh] items-center'>
        <div className='flex gap-[0.3rem] bg-white px-[0.6rem] py-[0.3rem] items-center'>
            <CgArrowLongLeft />
            <div className='flex'>
                <img src={Davemin} height='30px' width='20px' alt="" />
                <li className='font-bold text-black hover:text-blue-600'>
                    <Link to='/'>Back to JS Bin</Link>
                </li>
            </div>
        </div>
        <ul className='flex gap-[1rem] items-center font-bold'>
            <li className='text-black font-normal text-[0.8rem]'>
                <input type="text" className='px-[0.5rem] py-[0.5rem] bg-slate-50' placeholder='search...' />
            </li>
            <li className='text-black '>
                <Link to='/help/blog'>Blog</Link>
            </li>
            <li className='text-black '>
                <Link>Help</Link>
            </li>
        </ul>
    </nav>
  )
}

export default HelpNavbar