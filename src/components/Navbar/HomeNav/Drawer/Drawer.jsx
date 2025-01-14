import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
function DrawerComp() {
    const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const drawerNav=[
    {
        name:'New',
        path:'#'
    },
    {
        name:'Open...',
        path:'#'
    },
    {
        name:'Login/Register',
        path:'/register'
    },
    {
        name:'Upgrade',
        path:'/help/profeature'
    },
    {
        name:'Help',
        path:'/help'
    },
    {
        name:'Blog',
        path:'/help/blog'
    },
    {
        name:'About',
        path:'#'
    }
  ]
  const section = drawerNav.map((sec, ind)=>{
    return <li key={ind} className='text-blue-700 font-mono text-[1.1rem]'>
        <Link to={sec.path}>{sec.name}</Link>
        <hr />
    </li>
  })
  return (
    <div className='block md:hidden'>
      <Button onClick={toggleDrawer(true)}><img src="dave.min.svg" height='30px' width='25px' alt="dave not found" /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div className='bg-blue-200 h-full opacity-65'>
        <ul className='flex flex-col gap-[1rem] w-[45vw]'>
            {section}
        </ul>
        </div>
      </Drawer>
    </div>
  )
}

export default DrawerComp