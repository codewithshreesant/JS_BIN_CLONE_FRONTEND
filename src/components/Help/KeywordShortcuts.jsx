import React from 'react'
import { Link } from 'react-router-dom';

const applicationShortcuts=[
    {
        shortcut:['ctrl','?'],
        action:'Show keyboard shortcuts'
    },
    {
        shortcut:['ctrl','shift','/'],
        action:'Search help',
    },
    {
        shortcut:['ctrl','l'],
        action:'clear console'
    },
    {
        shortcut:['ctrl','return'],
        action:'Run code and save live reload'
    },
    {
        shortcut:['ctrl','shift','delete'],
        action:'Delete the current bin'
    },
    {
        shortcut:['ctrl','s'],
        action:'Save current state as a revision'
    },
    {
        shortcut:['ctrl','shift','s'],
        action:'Create a clone of the current bin'
    },
    {
        shortcut:['ctrl','shift','</kbd>'],
        action:'Hide JS Bin navigation bar'
    },
    {
        shortcut:['ctrl','o'],
        action:'Open bin history (when logged in)'
    },
    {
        shortcut:['ctrl','y'],
        action:'Toggle archive state on the current bin'
    }
]

function KeywordShortcuts() {
  return (
    <div className='flex flex-col items-center'>
        <div className='w-[40vw]'>
        <div>
            <h1>Keyboard Shortcuts</h1>
            <p>JS Bin supports keyboard shortcuts when the editor panels are focused (i.e. you have a cursor). Shortcuts can also be <span className='text-blue-600'><Link>disabled</Link></span> if desired.</p>
        </div>
        <div>
            <h2>Application level</h2>
            <table>
                <thead>
                    <tr>
                        <th>Shortcut</th>
                        <th>Action</th>
                    </tr>
                    
                </thead>
                <hr />
                <tbody>
                    
                        {
                            applicationShortcuts.map((button, index)=>{
                                return<tr className='mx-[1rem]'>
                                    {
                                    button.shortcut.map((short,index)=>(
                                        <td>
                                            <kbd>{short}</kbd>
                                            {button.shortcut.length-1 != index && <span>+</span>}
                                        </td>
                                    ))             
                                    }
                                    <td>{button.action}</td>
                                </tr>
                            })
                        }
                </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}


export default KeywordShortcuts;    