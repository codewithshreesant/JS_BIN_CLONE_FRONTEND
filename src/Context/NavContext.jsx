
import { Children, createContext, useState } from "react";

// const initialState={
//     showNav:showNav
// }

export let contextApi=createContext();

export const ContextProvider=({children}) => {
    let [showNav, setShowNav]=useState(true);
    let [showCss, setShowCss]=useState(false);
    let [showJs, setShowJs]=useState(false);
    let [showHtml, setShowHtml]=useState(true);
    let [showLogin, setShowLogin]=useState(false);
    return <contextApi.Provider value={{showLogin,setShowLogin,showNav, setShowNav, showCss, setShowCss, showJs, setShowJs, showHtml, setShowHtml}}>{children}</contextApi.Provider>
}
