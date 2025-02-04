import React from "react";
import SwitchTheme from "./SwitchTheme";
import SwitchLanguage from "./SwitchLanguage";
import { useAuth } from "./context/AuthContext";

function Header5(){
    const {user,dispatch} = useAuth();

    const login = () =>{
        dispatch({
            type:'LOGIN',
            payload:{
                name:'Furkan',
                surname:'Sahin',
                id:'1'
            }
        })
    }

    const logout = () =>{
        dispatch({
            type:'LOG_OUT',
            payload:false
        })
    }

    return(
        <header>
            HEADER <br/>
            Current User = {user.name} {user.surname}
            <br/> 
            {user ?(<button onClick={logout}>Log Out</button>) : (<button onClick={login}>Log In</button>)}
            <hr/>
            <SwitchTheme></SwitchTheme>
            <br/>
            <SwitchLanguage></SwitchLanguage>
        </header>
    )
}

export default Header5