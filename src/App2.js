import React from "react"
import Test2 from "./Test2"
import { useState } from "react"

function App2(){

    const[show,setShow] = useState(false);

    return(
        <>
        <button onClick={() => {setShow(!show)}}>
            {!show ? 'Show' : 'Hide'}
        </button>
        {show && <div><Test2/></div>}
        
        </>
    )

}
export default App2