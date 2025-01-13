import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Support({key,title,links}) {
  return (
    <div>
        <h1 className='h-[4vh] flex items-center gap-1'><span>
           <Link to='https://opencollective.com/jsbin/contribute'>{title}</Link>
        </span>  <MdKeyboardDoubleArrowRight /> </h1>
        <ul>
            {
                links && links.map((element, index)=>{
                    return <li className='my-[0.3rem]'>
                        <Link to={element.path}>{element.name}</Link>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Support