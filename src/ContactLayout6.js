import React from "react"
import { Outlet } from "react-router-dom"

export default function ContactLayout6(){
    return(
        <>
            <h3>Contact Page</h3>
            <br/>
            <Outlet/>
        </>
    )
}