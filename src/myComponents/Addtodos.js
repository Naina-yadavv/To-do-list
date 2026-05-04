import React, { useState } from "react";

const Addtodos = (props) => {
  const [title, settitle]= useState("");
  const[desc, setdesc]= useState("")
    
  const submit = (e)=> {
  e.preventDefault();
  if (!title || !desc){
    alert("title or description cannot be blank");
    return;
  }

  props.addTodo(title,desc);
  settitle("");
  setdesc("");
  };

  return (
    <div className="container mt-5">
        <h3>Add a To do</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label for="Title" className="form-label">To do title</label>
    <input type="text" value={title}   onChange={(e) => settitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="desc" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e) => setdesc(e.target.value)} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-primary">Add</button>
</form>
    </div>
  )
}

export default Addtodos
