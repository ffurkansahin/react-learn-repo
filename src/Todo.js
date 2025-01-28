import React, { act } from "react"
import { useState,useReducer } from "react"

function Reducer(state,action){
    switch(action.type){
        case 'SET_TODO':
            return{
                ...state,
                todo:action.value
            }
        case 'SUBMIT_HANDLE':
            return{
                ...state,
                todo: '',
                todos:[
                    ...state.todos,
                    action.todo
                ]
            }
    }
    
}

export default function Todo(){

    const [state,dispatch] = useReducer(Reducer,{
        todos:[],
        todo:''
    })

    // const[todos,setTodos] = useState([]);
    // const[todo,setTodo] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({
            type:'SUBMIT_HANDLE',
            todo: state.todo
        })
    }

    const onChange = e =>{
        dispatch({
            type: 'SET_TODO',
            value: e.target.value
        })
    }

    return(
        <>
            <h4>Todo</h4>
            <form onSubmit={handleSubmit}>
                <input type='text' value={state.todo} onChange={onChange}></input>
                <button disabled={!state.todo} type="submit">Ekle</button>
            </form>
            <ul>
                {state.todos.map((todo,index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </>
    )
}