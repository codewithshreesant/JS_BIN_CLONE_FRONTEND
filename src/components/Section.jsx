import React from 'react'
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Section({ key, title, links }) {
    return (
        <div className='flex flex-col gap-[0.1rem] relative'>
            { title=="JS Bin features" &&
             <h1 className='h-[4vh] flex items-center gap-1'><span>
             <Link to='/help/featurelist'>{title}</Link>
             </span> <MdKeyboardDoubleArrowRight /></h1>
            }
            { title=="Pro features" &&
            <h1 className='h-[4vh] flex items-center gap-1'><span>
            <Link to='/help/profeature'>{title}</Link>
        </span> <MdKeyboardDoubleArrowRight /></h1> 
            }
            
            <ul>
                {
                    links && links.map((element, index) => {
                        return <li className='my-[0.3rem]'>
                            <Link to={element.path}>{element.name}</Link>
                        </li>
                    })
                }
            </ul>
            { title=="Pro features" &&
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 w-[19vw] rounded mt-[1.2rem]">
                <Link to='/help/profeature'>Upgrade to Pro Now</Link>
            </button>   
            }
            { title=="JS Bin features" &&
            <div className="flex items-center absolute bottom-0">
            <input type="checkbox" className="mr-2" />
            <span className="text-blue-500">Textarea editor mode</span>
          </div>  
            }
        </div>
    )
}

export default Section