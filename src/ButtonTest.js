import React from "react"

function ButtonTest(props) {
    console.log(props)
    return (
        <button>
            {props.text}
        </button>
    )
}

export default ButtonTest