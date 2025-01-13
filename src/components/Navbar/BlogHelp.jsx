
import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function BlogHelp({key,title,links}) {
  return (
    <div>
        { title == "Blog" &&
        <h1 className='h-[4vh] flex items-center gap-1'>
            <span><Link to='/help/blog'>{title}</Link></span> <MdKeyboardDoubleArrowRight /> 
        </h1>}
        { title == "Help" &&
        <h1 className='h-[4vh] flex items-center gap-1'>
            <span><Link to='/help'>{title}</Link></span> <MdKeyboardDoubleArrowRight /> 
        </h1>}
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

export default BlogHelp