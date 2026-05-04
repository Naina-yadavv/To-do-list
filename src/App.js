import React, { useState } from "react";
import './App.css';
import Header from "./myComponents/Header";
import Todos from "./myComponents/Todos";
import Footer from "./myComponents/Footer";
import Addtodos from "./myComponents/Addtodos";

function App() {

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Finish ReactJS",
      desc: "Complete the playlist and make a project on your own."
    },
    {
      sno: 2,
      title: "Learn Tailwind CSS",
      desc: "Youtube Oneshot anfd W3schools Tutorial"
    },
    {
      sno: 3,
      title: "DSA ",
      desc: "GeeksforGeeks Tutorial and Codeforces for practice."
    }
  ]);

  // ✅ ADD TODO FUNCTION
  const addTodo = (title, desc) => {
    console.log("Adding todo:", title, desc);

    const sno = todos.length === 0 
      ? 1 
      : todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };

    setTodos([...todos, myTodo]);
  };

  // ✅ DELETE FUNCTION
  const onDelete = (todo) => {
    console.log("Deleting todo:", todo);
    setTodos(todos.filter((e) => e.sno !== todo.sno));
  };

  return (
    <>
      <Header title="My to do list" searchBar={true} />
      <Addtodos addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;