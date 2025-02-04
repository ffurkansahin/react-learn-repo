import { createContext, useContext, useReducer } from "react";
import React from "react";
import siteReducer from "../reducer/siteReducer";

const Context = createContext()

const Provider = ({children}) => {
    const [state,dispatch] = useReducer(siteReducer,{
        theme:'light',
        language:'tr'
    })


    const provideData ={
        ...state,
        dispatch
    }

    return(
        <Context.Provider value={provideData}>
            {children}
        </Context.Provider>
    )
}

export const useSite = () => useContext(Context)

export default Provider