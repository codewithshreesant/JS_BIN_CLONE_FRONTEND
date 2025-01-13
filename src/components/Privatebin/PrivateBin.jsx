import React from 'react'
import privateMenu1 from '../../../public/private-menu1.png'
import privateBins2 from '../../../public/private-bins2.gif'


function PrivateBin() {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[45vw]'>
            <div>
                <h1 className='text-black font-bold text-[2.1rem]'>Private bins</h1>
            </div>
            <div>
                <img src={privateMenu1} alt="" />
                <div className='flex flex-col gap-[1rem]'>
                    <p>Self explanatory, but it means if any other user than you tries to access your private bin, they will get a 404.</p>
                    <p>Once your bin is private, you’ll also see the card in the bottom right indicating it’s privacy mode.</p>
                </div>
                <img src={privateBins2} alt="" />
            </div>
        </div>
    </div>
  )
}


export default PrivateBin 