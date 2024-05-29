import React from 'react'

const TodoComponent = ({todos, onDelete}) => {
  return (
    <div>
      <h4>{todos.title}</h4>
      <p>{todos.description}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todos)}}>Delete</button>
    </div>
  )
}

export default TodoComponent

