import React from "react";
import SiteProvider from "./context/SiteContext"
import AuthProvider from "./context/AuthContext"
import Home5 from "./Home5";

function App5(){

    return(
        <SiteProvider>
            <AuthProvider>
                <Home5></Home5>
            </AuthProvider>
        </SiteProvider>
    )
}

export default App5