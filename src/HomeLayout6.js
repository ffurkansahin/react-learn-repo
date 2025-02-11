import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { url } from "./utils6";

export default function HomeLayout6(){
    return(
        <nav>
            <NavLink to={url('home')}> Home Page </NavLink>

            <NavLink to={url('home.contact')} style={({isActive}) =>({
                backgroundColor: isActive ? 'red' : 'transparent'
            })}> Contact </NavLink>

            <NavLink to={url('home.blog')}> 
                {({isActive}) => (
                    <> 
                        Blog {isActive  && '(Active)'}  
                    </>
                )} 
            </NavLink>

            <NavLink to={url('home.profile')} style={({isActive}) =>({
                backgroundColor: isActive ? 'red' : 'transparent'
            })}> Profile 
            </NavLink>
            <br/>
            <Outlet></Outlet>
        </nav>
    )
}