import React from "react";
import Header5 from "./Header5";
import Footer5 from "./Footer5";
import { useAuth } from "./context/AuthContext";

export default function Home5(){
    const {user} = useAuth();

    return(
        <>
            <Header5></Header5>
            App
            {user ? (<div style={{padding:10,border:'2px solid red'}}>This area only seen by users</div>) : <div></div>}
            <Footer5></Footer5>
        </>
    )
}