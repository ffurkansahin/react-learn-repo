import React from "react"
import { useParams } from "react-router-dom"

export default function Post(){
    const {url} = useParams()

    return(
        <>
            Post Contact Page = {url}
        </>
    )

}