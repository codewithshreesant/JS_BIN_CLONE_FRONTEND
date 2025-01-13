import React from 'react'

function BlogFooter() {
    return (
        <div className='w-[90vw] flex flex-col items-center'>
            <div className="p-4 rounded border-solid border-[0.4rem] border-yellow-400 w-[45vw] h-[30vh] flex flex-col justify-center">
                <div className='flex items-center'>
                    <span className="text-red-500 mr-2">❤️</span>
                    <h2 className="text-lg font-bold">Love JS Bin?</h2>
                </div>
                <p className="mt-2">
                    Support this <a href="#" className="text-blue-500 underline">open source project today</a>, and help it continue to run for another decade 🎂
                </p>
            </div>
        </div>
    )
}

export default BlogFooter