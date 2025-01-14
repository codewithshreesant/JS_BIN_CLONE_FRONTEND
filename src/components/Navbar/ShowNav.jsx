import React from 'react'

function ShowNav({setShowNav}) {
    let showNavBar=()=>{
        setShowNav(true)
    }
  return (
    <div>
        <button onClick={showNavBar}>
            <img src="dave.min.svg" height='40px' width='30px' alt="dave not found" />
        </button>
    </div>
  )
}

export default ShowNav  