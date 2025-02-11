import { useRoutes } from 'react-router-dom'
import './style6.css'
import routes from './Routes6'
import { generatePath } from 'react-router-dom'
import { url } from './utils6'

export default function App6(){
    url('home.contact.post',{
        url:'test-furkansahin'
    })

    return useRoutes(routes)
}