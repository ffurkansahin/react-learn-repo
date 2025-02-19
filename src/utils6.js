import routes from "./Routes6";
import { generatePath } from "react-router-dom";

export const url = (path, params = {}) =>{
    let lastRoute, url
    path.split('.').map(p=>{
        if(!lastRoute){
            lastRoute = routes.find(r=>r.name === p)
            url = lastRoute.path
        }
        else{
            lastRoute = lastRoute.children.find(r=>r.name === p)
            url += lastRoute.path + '/'
        }
    })
    return generatePath(url,params)
}