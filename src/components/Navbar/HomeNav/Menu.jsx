import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contextApi } from '../../../Context/NavContext';

function Menu({ title, path }) {
    const { showLogin, setShowLogin } = useContext(contextApi);
    const handleClick=()=>{
        setShowLogin(!showLogin);
    }
    
    return (
        <>
            <li>
                {
                    title != "Login or Register" && <Link to={path}>{title}</Link>
                }

                {
                    title=="Login or Register" && <Link to={path} onClick={handleClick} className='bg-yellow-300 px-[1rem] py-[0.3rem] text-black'>{title}</Link>
                }

            </li>
            
        </>
    )
}

export default Menu 