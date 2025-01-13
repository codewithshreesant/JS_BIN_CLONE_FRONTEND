import React from 'react'

function FeatureList() {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[45vw]'>
            <div>
                <h1 className='text-black font-bold text-[2.1rem]'>Feature list</h1>
            </div>
            <div>
                <p>This is a non-exhaustive, non-priortised list of features that JS Bin has.</p>
                <p>Please feel free to <strong>contribute to this list</strong> if you know of a feature, and add descriptions and demos where appropriate.</p>
                <ul className='list-disc'>
                    <li className='list-disc text-black'>Live reload both in editor and in full preview</li>
                    <li className='list-disc text-black'>Console</li>
                    <li className='list-disc text-black'>Full unmodified rendered view</li>
                    <li className='list-disc text-black'>Gist support: import and export</li>
                    <li className='list-disc text-black'>
                        Processors
                        <ul className='ml-[2rem]'>
                            <li className='list-disc text-black child-li'>HTML</li>
                            <li className='list-disc text-black child-li'>Markdown</li>
                            <li className='list-disc text-black child-li'>Jade</li>
                            <li className='list-disc text-black child-li'>CSS</li>
                            <li className='list-disc text-black child-li'>Less</li>
                            <li className='list-disc text-black child-li'>Myth</li>
                            <li className='list-disc text-black child-li'>Stylus</li>
                            <li className='list-disc text-black child-li'>Sass & SCSS (with Compass & Bourbon)</li>
                            <li className='list-disc text-black child-li'>JavaScript</li>
                            <li className='list-disc text-black child-li'>Babel (previously 6to5)</li>
                            <li className='list-disc text-black child-li'>Coffeescript</li>
                            <li className='list-disc text-black child-li'>Processing</li>
                            <li className='list-disc text-black child-li'>React (jsx)</li>
                            <li className='list-disc text-black child-li'>Traceur</li>
                            <li className='list-disc text-black child-li'>TypeScript</li>
                            <li className='list-disc text-black child-li'>LiveScript</li>
                        </ul>
                    </li>
                    <li className='list-disc text-black'>
                        Debug
                    </li>
                    <li className='list-disc text-black'>
                        Linting (inline to code, gutter or in footer) with full config control
                        <ul className='ml-[2rem]'>
                            <li className='list-disc text-black child-li'>JSHint</li>
                            <li className='list-disc text-black child-li'>CoffeeLint</li>
                            <li className='list-disc text-black child-li'>CSSLint</li>
                            <li className='list-disc text-black child-li'>HTMLLint</li>
                        </ul>
                    </li>
                    <li className='list-disc text-black'>
                        Archive a bin
                    </li>
                    <li className='list-disc text-black'>Delete bins</li>
                    <li className='list-disc text-black'>Pronounceable urls - explanation</li>
                    <li className='list-disc text-black'>Embeddable in any configuration</li>
                    <li className='list-disc text-black'>Self-host and locally installable</li>
                    <li className='list-disc text-black'>
                        CodeMirror (4.4.0)
                        <ul className='ml-[2rem]'>
                            <li className='list-disc text-black child-li'>Multiple cursors</li>
                            <li className='list-disc text-black child-li'>Themes</li>
                            <li className='list-disc text-black child-li'>Addon support</li>
                            <li className='list-disc text-black child-li'>Keybindings: vim, emacs and sublime</li>
                            <li className='list-disc text-black child-li'>Tern</li>
                        </ul>
                    </li>
                    <li className='list-disc text-black'>Custom templates and default preferences (like default processors)</li>
                    <li className='list-disc text-black'>Library support</li>
                    <li className='list-disc text-black'>Custom libraries</li>
                    <li className='list-disc text-black'>Drag & drop file</li>
                    <li className='list-disc text-black'>File update binding</li>
                    <li className='list-disc text-black'>Custom URLs</li>
                    <li className='list-disc text-black'>Emmet (previously known as Zen Coding)</li>
                    <li className='list-disc text-black'>Hide toolbar - ctrl+shift+kbd</li>
                    <li className='list-disc text-black'>Keyboard shortcuts - cmd+shift+?</li>
                    <li className='list-disc text-black'>Download</li>
                    <li className='list-disc text-black'>Clone</li>
                    <li className='list-disc text-black'>
                        Shortcut URLs
                        <ul className='ml-[2rem]'>
                            <li className='list-disc text-black child-li'>/:user/last</li>
                            <li className='list-disc text-black child-li'>/:bin/latest</li>
                        </ul>
                    </li>
                    <li className='list-disc text-black'>Bin info card - details about the owner, and whether they’re streaming</li>
                    <li className='list-disc text-black'>
                        Plain text mode / accessibility mode
                    </li>
                    <li className='list-disc text-black'>oEmbed</li>
                    <li className='list-disc text-black'>SSL</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FeatureList