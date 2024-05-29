import React from 'react'
import TodoComponent from './TodoComponent'
const Todos = (props) => {
    const myStyle = {
      minHeight: "100vh"
    };
  
    return (
      <div className="container" style={myStyle}>
      <h3 className="my-3" >TODOs LIST</h3>
      {props.todos.length===0?"NO TODOS TO DISPLAY":<>
      {props.todos.map((todo)=>{
        return( <TodoComponent todos={todo} key={todo.sno} onDelete={props.onDelete}/> )
      })}</>}     
      
      
    </div>
  )
}

export default Todos
