import React from 'react'
import { Link } from 'react-router-dom'
import Exportgist from '../../../public/export-as-gist.png'
import Exportcomplete from '../../../public/export-complete.png'
function ExportGist() {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[45vw] flex flex-col gap-[2rem] my-[2rem]'>
                <div className='flex flex-col gap-[2rem]'>
                    <h1 className='text-black font-bold text-[2.1rem]'>Gists: how to export to a gist</h1>
                    <p>It’s easy to <span className='underline text-blue-500'><Link>import gists</Link></span> and it’s easy to export to a gist from JS Bin:</p>
                </div>
                <div>
                    <div>
                        <img src={Exportgist} alt="export not found" />
                        <div className='flex flex-col gap-[2rem] my-4'>
                            <p>The functionality is available regardless of whether you’ve linked your Github account or not. However, if you link your account to Github, then the exported gist will be linked to your Github account. If not, it will be create as an anonymous user on Github.</p>
                            <p>After selecting “Bins” menu, select “Export as gist” and you’ll be notified once the export is complete:</p>
                        </div>
                    </div>
                    <div>
                        <img src={Exportcomplete} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExportGist