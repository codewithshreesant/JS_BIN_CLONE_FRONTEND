import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { contextApi } from '../../../Context/NavContext'

function MiddleMenu({title, path}) {
  let {showCss, setShowCss, showJs, setShowJs, showHtml, setShowHtml}=useContext(contextApi);
  const handleCssClick=()=>{
    setShowCss(!showCss);
  }
  const handleJsClick=()=>{
    setShowJs(!showJs);
  }
  const handleHtmlClick=()=>{
    setShowHtml(!showHtml);
  }
  return (
    <button className='text-[0.8rem] px-[0.6rem] bg-slate-200 border-solid border-slate-300 border-[0.1rem] rounded'>
        { title=='HTML' && <Link to={path} onClick={handleHtmlClick}>
          {title}
        </Link>}
        { title=='CSS' && <Link to={path} onClick={handleCssClick}>{title}</Link>}
        { title=='JavaScript' && <Link to={path} onClick={handleJsClick}>{title}</Link>} 
        { title=='Console' && <Link to={path}>{title}</Link>}
        { title=='Output' && <Link to={path}>{title}</Link>} 
    </button>
  )
}

export default MiddleMenu 