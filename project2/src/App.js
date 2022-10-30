import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import TodoList from './TodoList';
import { About } from './About';
import { AddTodo } from './AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 const App = () => {

let initTodo;
  if(localStorage.getItem("todos") === null)
  {
    initTodo = [];
  }
  else
  {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(t)=>
  {
    console.log("delete button is pushed",t.task );
    setTodoArray(todoArray.filter(task=>{
      return task != t;
   }))

   localStorage.setItem("todos",JSON.stringify(todoArray));
  }
  
  const addTodo =(task)=>
  {
    let srno;
    if(todoArray.length ==0)
    {
      srno=0;
    }
    else
    {
       srno = todoArray[todoArray.length-1].sr + 1;
    }

    let temp = {
    sr: srno,
    task: task
   }
   setTodoArray([...todoArray , temp]);

  }

  const [todoArray, setTodoArray] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todoArray)); 
   }, [todoArray])

  return (
    <Router>
    <div className="App">
      <Header show={true}/>
      <Switch>
        <Route exact path="/" render = {()=>{
          return (
            <>
            <AddTodo addTodo={addTodo}/> <br></br>
            <TodoList tasks = {todoArray} onDelete = {onDelete}/>
            </>
          )
        }}></Route>
        <Route path = "/about">
          <About/>
        </Route>
     </Switch>
    </div>
    </Router>
  );
}


export default App;
// {
//   todoArray.map((t)=>{
//     return (
//       <TodoList tasks = {todoArray} />
//     )
//   })
// }