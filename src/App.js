import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./myComponents/Header";
import Todos from "./myComponents/Todos";
import Footer from "./myComponents/Footer";
import Addtodos from "./myComponents/Addtodos";
import Login from "./myComponents/Login";

function App() {

  // LOGIN STATE
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  // USER STATE
  const [user, setUser] = useState(null);

  // TODOS STATE
  const [todos, setTodos] = useState([
    { sno: 1, title: "Finish ReactJS", desc: "Complete the playlist" },
    { sno: 2, title: "Learn Tailwind", desc: "Practice UI" },
    { sno: 3, title: "DSA", desc: "Solve problems" }
  ]);

  //  ADD TODO
  const addTodo = (title, desc) => {
    const sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    setTodos([...todos, { sno, title, desc }]);
  };

  //  DELETE TODO
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e.sno !== todo.sno));
  };

  //  FETCH USER
  const fetchUser = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!res.ok) {
        console.log("Token invalid, logging out...");
        handleLogout();
        return;
      }

      const data = await res.json();
      console.log("USER DATA:", data);
      setUser(data);

    } catch (error) {
      console.log(error);
    }
  };

  // REFRESH SESSION (NEW)
  const refreshSession = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("https://dummyjson.com/auth/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          refreshToken: token
        }),
        credentials: "include"
      });

      const data = await res.json();
      console.log("REFRESH RESPONSE:", data);

      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
      }

    } catch (error) {
      console.log(error);
    }
  };

  //  LOGIN HANDLER
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
  };

  //  AUTO LOAD (USER + REFRESH)
  useEffect(() => {
    if (isLoggedIn) {
      fetchUser();
      refreshSession();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Header 
            title="My to do list" 
            searchBar={true} 
            user={user}   
          />

          <button className="btn btn-danger m-3" onClick={handleLogout}>
            Logout
          </button>

          <Addtodos addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
          <Footer />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;