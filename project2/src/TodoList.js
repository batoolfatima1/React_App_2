import React, { Component } from 'react'


const TodoList =({tasks, onDelete})=>{


  let btn_style = {
    backgroundColor : "red"
  }
  return(
    <>
     <div><h1>TodoList</h1>
     {tasks.length ===0? "no task":
     tasks.map((t)=>{
      return (
        <><p>{t.sr}</p>
        <p>{t.task}</p>
        <button style = {btn_style} onClick={()=>{onDelete(t)}}>delete</button><hr></hr></>
      )
     })}
      </div>
    </>
  )
}
 export default TodoList;

// <h2>{`${this.props.show}`}</h2>