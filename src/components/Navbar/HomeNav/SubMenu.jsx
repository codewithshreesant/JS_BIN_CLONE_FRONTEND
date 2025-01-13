import React from 'react'
import { NavLink } from 'react-router-dom'

function SubMenu({links, setShowSubMenu, showSubMenu}) {
    
  return (
    <ul>
        
        {
            links?.map((ele,i)=>{
                return <li>
                    <NavLink to={ele.url} className='text-black font-serif'>{ele.name}</NavLink> 
                </li>
            })
        }
    </ul>
  )
}

export default SubMenu