import React from 'react';
import TodoItem from "../myComponents/TodoItem";

const Todos = (props) => {
    let myStyle= {
        minHeight:"80vh",
        margin: "40px auto",
        paddingBottom: "50px"
    };
    
  return (
    <div className="container" my-5 style={myStyle}>
      <h3 className="text-center">To-dos List</h3>

      {props.todos.length === 0 ? (
        "Nothing to display"
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.sno}
              onDelete={props.onDelete}
            />
          );
        })
      )}

    </div>
  );
};

export default Todos;
