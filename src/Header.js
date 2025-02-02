import React from "react";
import { memo } from "react";

function Header(){
    console.log('header rendered');
    return(
        <h1>Header</h1>
    )
}

export default memo(Header)