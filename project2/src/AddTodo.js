import React, { useState } from 'react'
export const AddTodo = ({addTodo}) => {

    const[task,setTask] = useState(""); 

    const submit=(e)=>
    {
        e.preventDefault();
        if(!task)
        {
            alert("enter any task");
        }
        else
        {
            addTodo(task);
            setTask("");
        }

        
    }

  return (
      <div>
          <form onSubmit={submit}>
            <h2>Add a Todo</h2>
              <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Todo</label>
                  <input type="text" value = {task} onChange= {(e)=> setTask(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
             </div> 
              <button type="submit" className="btn btn-primary">Add</button>
          </form></div>
  )
}
