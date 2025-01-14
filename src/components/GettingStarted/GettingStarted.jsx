import React from 'react'
import { Link } from 'react-router-dom'
import JsBinStart from '../../../public/jsbin-start.png'
import ShareMenu from '../../../public/share-menu1.png'
function GettingStarted() {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[45vw]'>
            <div>
                <h1 className='text-black font-bold text-[2.1rem]'>Getting started</h1>
                <div className='flex flex-col gap-[1.5rem]'>
                    <p>
                    JS Bin is a tool for experimenting with web languages. In particular HTML, CSS and JavaScript, but JS Bin also supports other languages too (like Markdown, Jade and Sass).
                    </p>
                    <p>
                    JS Bin is ultimately a code sharing site. Along with the code, the complete output of the code is also shared with other developers, colleagues and/or students. As you type into one of the editor “panels”, you and anyone watching your bin will see the output being generated in real-time in the output panel.
                    </p>
                    <p>
                    There’s many features tucked away inside JS Bin, but our design principle is that everyone gets a cursor. So when you arrive for the first time, you’ll be greeted with an initial start HTML page and very little else (though you <span className='text-blue-700 underline'><Link>can customise your default code</Link></span>).
                    </p>
                </div>
                <img src={JsBinStart} alt="" />
            </div>
            <div>
                <div>
                    <h2 className='text-black font-bold text-[1.8rem]'>Sharing</h2>
                    <p>
                    Now you can share this URL with anyone else, either for them to see your work, or help you improve on it. There’s a few ways to view that bin too if you click “Share” and select the configuration and URL you want to share:
                    </p>
                </div>
                <div>
                <img src={ShareMenu} alt="" />
                    <p>If you share a URL to your bin, others can view the code and the output. Others can also clone your work to make their own changes and experiments (but of course your work remains entirely intact).</p>
                </div>
            </div>
            <div>
                <h2 className='text-black font-bold text-[1.8rem]'>Registering</h2>
                <div className='flex flex-col gap-6'>
                    <p>If you register (which is free and simple), your profile will remember which bins you created, but also give you a shortcut URL that always takes you to the last bin you worked on.</p>
                    <p>For instance, if your username was “Dave”, your last bin URL is: http://jsbin.com/dave/last and to edit it’s http://jsbin.com/dave/last/edit.</p>
                </div>
            </div>
            <div>
                <h2 className='text-black font-bold text-[1.8rem]'>Finding out more</h2>
                <ul>
                    <li className='list-disc text-black text-[1rem]'>The JS Bin blog - where we’ll post what we’ve released that week and useful information about JS Bin</li>
                    <li className='list-disc text-black text-[1rem]'>Twitter - posting alerts or replying to your quick questions</li>
                    <li className='list-disc text-black text-[1rem]'>Videos - a growing collection of video tutorials</li>
                    <li className='list-disc text-black text-[1rem]'>Issues, bugs and ideas - if you have a problem or suggestion, we always want to hear</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default GettingStarted