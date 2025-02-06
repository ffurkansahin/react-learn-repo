import React from "react";
import { Link } from "react-router-dom";

export default function Blog404(){
    return(
        <>
            <h2>Contact Page Not Found</h2>
            <br/>
            <Link to='/contact'>Go To Contact Home Page</Link>
        </>
    )
}