import React, { useState, useEffect } from 'react';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    console.log("Delete is clicked for todo:", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };

  const addTodo = (title, description) => {
    let sno;
    console.log("I am adding this todo", title, description);
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description
    };
    setTodos([...todos, myTodo]);
  };

  return (

    <>
 <Router>
      <Header title="TODOs-LIST" />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route 
          path="/" 
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } 
        />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
