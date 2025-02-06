import React from "react"
import { Routes,Route,Link,NavLink } from "react-router-dom"
import Home6 from "./Home6"
import Contact6 from "./Contact6"
import Blog6 from "./ContactPages6/Contact6"
import './style6.css'
import Staffs from "./ContactPages6/Staffs"
import Admins from "./ContactPages6/Admins"
import Post from "./ContactPages6/Post"
import ContactLayout6 from "./ContactLayout6"
import Page6404 from "./Page6404"
import Blog404 from "./ContactPages6/Contact404"

export default function App6(){
    return(
        <>
        <nav>
            <NavLink to='/'> Home Page </NavLink>

            <NavLink to='/contact' style={({isActive}) =>({
                backgroundColor: isActive ? 'red' : 'transparent'
            })}> Contact </NavLink>

            <NavLink to='/blog'> 
                {({isActive}) => (
                    <> 
                        Blog {isActive  && '(Active)'}  
                    </>
                )} 
            </NavLink>
        </nav>
        <Routes>
            <Route path='/' element={<Home6/>}/>

            <Route path='/contact' element={<ContactLayout6/>}>
                <Route index={true} element={<Contact6/>}/>
                <Route path="admins" element={<Admins/>}/> {/* usage of Outlet */}
                <Route path="/contact/staffs" element={<Staffs/>}/>
                <Route path="post/:url" element={<Post/>}/>
                <Route path={"*"} element={<Blog404/>}/>
            </Route>
            <Route path='/blog' element={<Blog6/>}/>
            <Route path={"*"} element={<Page6404/>}/>
        </Routes>
        </>
    )
}