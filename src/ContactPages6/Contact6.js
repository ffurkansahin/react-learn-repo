import React, { useEffect, useState } from "react"
import { url } from "../utils6"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

export default function Contact6(){
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState(searchParams.get('search') || '');

    useEffect(()=>{
        searchParams.set('search',search);

        if(!search){
            searchParams.delete('search')
        }

        setSearchParams(Object.fromEntries([...searchParams]))
    },[search])

    const posts = [
        {
            title: 'Furkan Sahin',
            url: 'fsahin',
        },
        {
            title: 'Adem Biyik',
            url: 'abiyik'
        }
    ]

    return(
        <>
            <input type="text" defaultValue={search} onChange={e=>setSearch(e.target.value)}></input>
            <ul>
                {posts.map((post,index) =>(
                    <li key={index}>
                        <Link to={url('home.contact.post',{url: post.url})}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}