import React from "react";
import {useSite} from "./context/SiteContext"

export default function SwitchTheme(){
    const {theme,dispatch} = useSite()

    const switchTheme = () => {
        dispatch({
            type:'SWITCH_THEME'
        })
    }

    return(
        <>
            Current theme = {theme} <br/>
            <button onClick={switchTheme}>Change Theme</button>
        </>
    )
}