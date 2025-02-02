import React from "react"
import { useMemo } from "react"
import Header from "./Header"
import { useState,useReducer,useCallback } from "react"
import AddTodo from "./AddTodo"
import Todos from "./Todos"

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
        case 'SET_SEARCH':
            return{
                ...state,
                search:action.value
            }    
    }
    
}

export default function Todo(){

    const [state,dispatch] = useReducer(Reducer,{
        todos:[],
        todo:'',
        search:''
    })

    const [count,setCount] = useState(0)

    const handleSubmit = useCallback(e => {
        e.preventDefault()
        dispatch({
            type:'SUBMIT_HANDLE',
            todo: state.todo
        })
    },[state.todo])

    const onChange = useCallback(e =>{
        dispatch({
            type: 'SET_TODO',
            value: e.target.value
        })
    },[])
    
    const SearchHandle = e =>{
        dispatch({
            type:'SET_SEARCH',
            value: e.target.value
        })
    }

    const filteredTodos = useMemo(()=>{
        return state.todos.filter(todo => todo.toLocaleLowerCase("TR").includes(state.search.toLocaleLowerCase("TR")))
    },[state.todos,state.search])

    return(
        <>
            <Header/>
            <h4>{count}</h4>
            <button onClick={()=>{setCount(count=> count +1)}}>Increase</button>
            <hr></hr>
            <input type="text" value={state.search} placeholder="Search in todos" onChange={SearchHandle}></input>
            {state.search}
            <h4>Todo</h4>
            <AddTodo onChange={onChange} handleSubmit={handleSubmit} state={state}/>
            <Todos todos={filteredTodos}/>
        </>
    )
}