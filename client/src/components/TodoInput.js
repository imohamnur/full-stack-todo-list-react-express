import React, { useState } from 'react'

const TodoInput = () => {

  const [description, setDescription] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      console.log(description);
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  }


  return (
    <header>
      <h1>Todo List</h1>
      <form onSubmit={handlePost}>
        <input type="text" placeholder="Enter Todo Here" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button className='btn btn-add'>Add</button>
      </form>
    </header>
  )
}

export default TodoInput