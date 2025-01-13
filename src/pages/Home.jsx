import React from 'react'
import Nav from '../components/Navbar/HomeNav/Nav'
import CodeEditor from '../components/CodeEditor'

function Home() {
  return (
    <div className='text-3xl relative'>
        <div className='w-full absolute z-10'>
          <Nav />
        </div>
        <div className='absolute left-[1%] top-[2rem]'>
          <CodeEditor />
        </div>
    </div>
  )
}

export default Home