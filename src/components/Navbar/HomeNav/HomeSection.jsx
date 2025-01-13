// import React, { useState } from 'react'
// import SubMenu from './SubMenu'
// import Menu from './Menu'
// import MiddleMenu from './MiddleMenu';

// function HomeSection({ key, title, links, hadSubMenu, path, showBtn, middleMenu }) {
//     let [showSubMenu, setShowSubMenu] = useState(hadSubMenu);
//     let handleSubMenu = () => {
//         setShowSubMenu(!showSubMenu)
//     }

//     return (
//         <>
//             {showBtn &&
//                 <div>
//                     <button onClick={handleSubMenu}>{title}</button>
//                     {showSubMenu && <SubMenu links={links} />}
//                 </div>
//             }
//             {
//                 middleMenu &&
//                 <MiddleMenu title={title} path={path} />
//             }
//             {
//                 !hadSubMenu && !middleMenu && <Menu title={title} path={path} />
//             }
//         </>
//     )
// }


// export default HomeSection 