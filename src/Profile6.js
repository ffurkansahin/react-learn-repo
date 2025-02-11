import React from "react";
import { useAuth } from "./context6/AuthContext6";
import { Link } from "react-router-dom";

export default function Profile6(){
    const {user, setUser} = useAuth();

    const logoutHandle = () => {
        localStorage.removeItem('user')
        setUser(false)
    }

    return(
        <>
         Profile Page <br/>
         {!user && <Link to={"/auth/login"}>Login</Link>}
         {user && <button onClick={logoutHandle}>Log Out</button>}
        </>
    )
}