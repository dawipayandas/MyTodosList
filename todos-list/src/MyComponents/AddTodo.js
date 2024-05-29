import React from 'react'
import { useState } from "react";
export const AddTodo = (props) => {
    const [title, settitle]=useState("")
    const [description, setdescription]=useState("")
    
    const submit = (e)=>{
      
          e.preventDefault();
            if(!title || !description){
            alert("Title or Description missing!")
            }
                props.addTodo(title, description);
    }
    
    
  return (
    <div className="container">
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=> settitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label"> Todo Description</label>
    <input type="text" className="form-control" value={description} onChange={(e)=> setdescription(e.target.value)} id="description"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Submit</button>
</form>
    </div>
  )
}

export default AddTodo
