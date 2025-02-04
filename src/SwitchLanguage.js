import React from "react";
import {useSite} from "./context/SiteContext"

export default function SwitchLanguage(){
    const {language, dispatch} = useSite()

    const switchLanguage = () =>{
        dispatch({
            type:'SWITCH_LANGUAGE'
        })
    }

    return(
        <>
            Current language = {language} <br/>
            <button onClick={switchLanguage}>Change language</button>
        </>
    )
}