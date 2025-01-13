import React from 'react'
import RegisterLogin from './RegisterLogin'
import { Link } from 'react-router-dom'

function AuthNavbar() {
  return (
    <div>
        <div>
            <ul className='flex gap-[4rem]'>
                <li className='text-black'>
                    <h2 className='opacity-50 font-bold text-[0.7rem]'>New to JS Bin</h2>
                    <Link to='/register' className='text-black text-[1rem]'>Register</Link>
                </li>
                <li className='text-black'>
                    <h2 className='opacity-50 font-bold text-[0.7rem]'>Existing Users</h2>
                    <Link to='/login' className='text-black text-[1rem]'>Login</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default AuthNavbar