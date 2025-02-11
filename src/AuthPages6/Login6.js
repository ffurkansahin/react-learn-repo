import React from "react";
import { useAuth } from "../context6/AuthContext6";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login6(){
    const {setUser} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const loginHandle = () => {
        setUser({
            username: 'furkansahin',
            id: '1'
        })
        navigate(location?.state?.return_url || '/')
    }

    return(
        <div>
            Login Page
            <br/>
            <button onClick={loginHandle}>Login</button>
        </div>
    )
}