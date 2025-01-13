import React from 'react'
import { IoMdClose } from "react-icons/io";

function Logo({setShowNav}) {
    let handleClick = () => {
        setShowNav(false);
    }
  return (
    <div>
        <button onClick={handleClick}>
          <IoMdClose />
        </button>
    <div>
        <img src="dave.min.svg" height='150px' width='100px' alt="dave logo" />
        <button className='px-[3rem] py-[0.5rem] border-[0.1rem] border-blue-600 border-solid'>New bin</button>
    </div>
    </div>
  )
}

export default Logo 