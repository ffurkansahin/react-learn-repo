import React, { forwardRef, useRef }  from "react"

function Input(props,ref){
    return(
        <input ref={ref} type="text" {...props}/>
    )
}

Input = forwardRef(Input)

export default function App3(){
    
    const inputRef = useRef();
    const focusInput = () =>{
        inputRef.current.focus()
    };

    return(
        <>
            <h1>useRef() - useForward()</h1>
            <Input ref={inputRef}/>
            <button onClick={focusInput}>Focus</button>
        </>
    )
}