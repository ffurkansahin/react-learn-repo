import React, { createContext, useContext, useReducer } from "react"
import authReducer from "../reducer/authReducer"

const Context = createContext()

const Provider = ({children}) =>{
    const [state,dispatch] = useReducer(authReducer,{
        user:false
    })

    const provideData = {
        ...state,
        dispatch
    }

    return(
        <Context.Provider value={provideData}>
            {children}
        </Context.Provider>
    )
}

export const useAuth = () => useContext(Context)

export default Provider