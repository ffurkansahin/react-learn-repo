import React, { act, useEffect, useState } from "react"
import "./style.scss"

function Tab({children,activeTab}){
    console.log(children)
    const[active, setActive] = useState(activeTab)

    useEffect(()=>{
        setActive(activeTab)
    },[activeTab]);

    return(
        <div>
            <nav>
                {children.map((tab,index) => (
                <button
                 onClick={()=> setActive(index)}
                 className={active === index ? 'active' : 'bg-gray-100'}
                 key={ index}>{tab.props.title}
                 </button>))}
            </nav>
            {children[active]}
        </div>
    )
}

Tab.Panel = function({children}){
    return(<div>
        {children}
    </div>
    )
}

export default Tab