import React from "react"
import { memo } from "react"


function AddTodo({handleSubmit,state,onChange}){
    console.log('add todo rendered')
    return(
    <form onSubmit={handleSubmit}>
        <input type='text' value={state.todo} onChange={onChange}></input>
        <button disabled={!state.todo} type="submit">Ekle</button>
    </form>
    )
}

export default memo(AddTodo)