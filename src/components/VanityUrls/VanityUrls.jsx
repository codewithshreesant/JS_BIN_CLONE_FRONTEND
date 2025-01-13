import React from 'react'

function VanityUrls() {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[45vw] flex flex-col gap-[2rem] h-[60vh] justify-center'>
            <h1 className='text-black font-bold text-[2.1rem]'>Vanity URLs</h1>
        <div className='flex flex-col gap-[1.5rem]'>
            <p>Vanity URLs has two purposes. The first is that puts your username when you share your bin’s output, and secondly allows you to publish to your vanity homepage.</p>
            <p>This means you can publish any bin to your vanity url on you.jsbin.com for example: http://dave.jsbin.com</p>
            <p>In addition, when you share the full output of your bins, your username is included in the URL, such as http://dave.jsbin.com/fajac/3/</p>
        </div>
        </div>
    </div>
  )
}

export default VanityUrls