import { data } from "autoprefixer";
import React, { useEffect } from "react"
import { useState } from "react";

export default function Test2(){

    const[postId,setPostId] = useState(1);
    const[post,setPost] = useState(false); 

    useEffect(()=>{
        console.log('component rendered')
        return () =>
        {
            console.log('component destroyed')
        }
    });

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${postId}`)
            .then(res=>res.json())
            .then(data => setPost(data))
    },[postId]);

    /* useEffect(()=>{
        console.log('postId value changed =', postId)
    },[postId]); */

    return(
    <div>
        <button onClick={()=> {setPostId (postId => postId + 1)}}>
            Next
        </button>
        <h2>{postId}</h2>
        {post && JSON.stringify(post)}
    </div>
    )

}
