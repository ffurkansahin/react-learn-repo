import React from "react";
import { useAuth } from "./context6/AuthContext6";
import {Navigate, useLocation} from "react-router-dom"

export default function PrivateRoute({children}){
    //check is user logged in
    //if it's not redirect
    const {user} = useAuth();
    const location = useLocation();

    if(!user){
        return <Navigate to="/auth/login" state={{return_url:location.pathname}}></Navigate>
    }
    //if it's yes show page


    return(
        children
    )
}