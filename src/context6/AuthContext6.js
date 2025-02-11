import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const Context = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.stringify(localStorage.getItem('user')));

    const data = {
        user,
        setUser
    }

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(user))
    },[user])

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useAuth= () => useContext(Context);
