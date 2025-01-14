import React, { useContext, useState } from 'react'
import MiddleMenu from './MiddleMenu';
import SubMenu from './SubMenu';
import Menu from './Menu';
import ShowNav from '../ShowNav';
import { contextApi } from '../../../Context/NavContext';
import { IoMdArrowDropdown } from "react-icons/io";
import LibraryMenu from './LibraryMenu';
import DrawerComp from './Drawer/Drawer';
// import { IoMdArrowDropdown } from "react-icons/io";


const Sections = [
    {
        title: 'File',
        hadSubMenu: true,
        showBtn: true,
        links: [
            { name: 'New', url: '#' },
            {
                name: 'Make bin Private',
                url: '#'
            },
            { name: 'Delete', url: '#' },
            { name: 'Archive', url: '#' },
            { name: 'Add Description', url: '#' },
            { name: 'save Snapshot', url: '#' },
            { name: 'Clone', url: '#' },
            { name: 'Publis to vanity homepage', url: '#' },
            { name: 'Export as gist', url: '#' },
            { name: 'Download', url: '#' },
            { name: 'Save as template', url: '#' }
        ]
    },
    {
        title: 'HTML',
        path: '#',
        middleMenu: true
    },
    {
        title: 'CSS',
        path: '#',
        middleMenu: true
    },
    {
        title: 'JavaScript',
        path: '#',
        middleMenu: true
    },
    {
        title: 'Console',
        path: '#',
        middleMenu: true
    },
    {
        title: 'Output',
        path: '#',
        middleMenu: true
    },
    {
        title: 'Login or Register',
        path: '#'
    },
    {
        title: 'Blog',
        path: '/help/singleblog/%20The%20Return%20and%20The%20Refactor'
    },
    {
        title: 'Help',
        path: '/help'
    }
]

function Nav() {
    let [showSubMenu, setShowSubMenu] = useState(Sections.hadSubMenu);
    let [showLibrary, setShowLibrary]=useState(false);
    let handleSubMenu = () => {
        setShowSubMenu(!showSubMenu)
    }
    let handleLibrary=()=>{
        setShowLibrary(!showLibrary);
    }
    const {showNav, setShowNav}=useContext(contextApi);
    return (
        <div>
        <nav className='grid md:grid-cols-3 grid-cols-[17vw,83vw] md:px-[1rem] bg-slate-100 border-[0.1rem] border-slate-300 border-solid'>
            <div>
            {
                Sections.map((section, index) => {
                    return <div>
                        {section.showBtn &&
                            <div className='flex'>
                                {!showNav && <ShowNav setShowNav={setShowNav}/>}
                                <DrawerComp />
                                <button onClick={handleSubMenu} className='text-[1rem] md:flex items-center hidden'><span>{section.title}</span> <IoMdArrowDropdown className='h-[2vh] w-[1vw]'/></button>
                                <button className='text-[0.8rem] md:flex items-center ml-[1rem] hidden' onClick={handleLibrary}>Add Library</button>
                                <button className='text-[0.8rem] md:flex items-center ml-[1rem] hidden'>Share</button>
                            </div>
                        }
                    </div>
                })
            }
            </div>
            <div className='flex flex-wrap'>
            {
                Sections.map((section, index) => {
                    return <div>
                        {
                            section.middleMenu &&
                            <MiddleMenu title={section.title} path={section.path} />
                        }
                    </div>
                })
            }
            </div>
            <div className='md:flex md:justify-around hidden'>
            {
                Sections.map((section, index) => {
                    return <div>
                        {
                            !section.hadSubMenu && !section.middleMenu && <Menu title={section.title} path={section.path} />
                        }
                    </div>
                })
            }
            </div>
        </nav>
        <div className='ml-[1rem]'>
            <div className='bg-white w-[20vw]'>
             {
                Sections.map((section, index) => {
                    return <div>
                        {section.showBtn &&
                            <div>
                                {showSubMenu && <SubMenu links={section.links} />}
                            </div>
                        }
                    </div>
                })
            }
            </div>
            {showLibrary && <LibraryMenu />}
        </div>
        </div>
    )
}

export default Nav 