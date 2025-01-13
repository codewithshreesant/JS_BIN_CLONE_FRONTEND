import React, { useContext, useState } from 'react'
import Section from '../Section'
import BlogHelp from './BlogHelp'
import Support from './Support'
import Logo from './Logo'
import ShowNav from './ShowNav'
import { contextApi } from '../../Context/NavContext'

const multipleSections = [
    {
        title: 'JS Bin features',
        feature: true,
        links: [
            { name: 'Getting started', path: '/help/getting-started' },
            { name: 'Keyboard shortcuts', path: '/help/keyboard-shortcuts' },
            { name: 'Exporting/importing gist', path: '/help/export-gist/' }
        ]
    },
    {
        title: 'Pro features',
        feature: true,
        links: [
            { name: 'Private bins', path: '/help/private-bins' },
            { name: 'Vaniry URLS', path: '/help/vanity-urls' },
        ]
    },
    {
        title: 'Blog',
        blogHelp: true,
        links: [
            { name: 'The Return and the refactor', path: '/help/singleblog/%20The%20Return%20and%20The%20Refactor' },
        ]
    },
    {
        title: 'Help',
        blogHelp: true,
        links: [
            { name: 'Stickers', path: '#' },
            { name: 'Private bins', path: '#' }
        ]
    },
    {
        title: 'Donate to JS Bin',
        support: true,
        links: [
            { name: 'Support JS Bin to keep the project open source & MIT for all', path: 'https://opencollective.com/jsbin/contribute' },
            { name: 'Follow @js_bin on twitter', path: 'https://x.com/js_bin?mx=2' },
            { name: 'By using JS Bin you agree to our legal terms', path: '#' }
        ]
    }
]

function Navbar() {
    const {showNav, setShowNav}=useContext(contextApi);

    return (
        <>
        { showNav &&
        <nav className='bg-blue-50 h-[30vh] flex items-center opacity-70'>
            <div className='grid grid-cols-5 mx-5'>
            <Logo setShowNav={setShowNav}/>
            {
                multipleSections.map((section) => (
                    <>
                        {section.feature &&
                            <Section key={section.title} title={section.title} links={section.links} blogHelp={section.blogHelp} />
                        }
                    </>
                )
                )
            }

            {<div className='flex flex-col'>
                {
                    multipleSections.map((section) => (
                        <div>
                            {section.blogHelp &&
                                <BlogHelp key={section.title} title={section.title} links={section.links} />
                            }
                        </div>
                    )
                    )
                }
            </div>}
            {<div>
                {
                    multipleSections.map((section) => (
                        <div>
                            {section.support &&
                                <Support key={section.title} title={section.title} links={section.links} />
                            }
                        </div>
                    )
                    )
                }
            </div>}
            </div>
        </nav>
        }
    </>
    )
}

export default Navbar  
