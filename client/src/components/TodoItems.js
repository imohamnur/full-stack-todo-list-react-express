import React, { useEffect, useState } from 'react'
import Modal from './Modal';

const TodoItems = () => {

  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const response = await fetch("http://localhost:5000/todos");
    const data = await response.json()
    setTodos(data);
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });
      setTodos((prevTodos) => {
        return prevTodos.filter((todo) => {
          if(todo.tid != id) {
            return todo;
          }
        })
      })
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  
  return (
    <table>
        <tr>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {todos.map((todo) => {
          return (
            <tr id={todo.tid}>
              <td>{todo.description}</td>
              <td><Modal key={todo.tid} id={todo.tid} description={todo.description} /></td>
              <td><button className="btn btn-delete" onClick={() => handleDelete(todo.tid)}>Delete</button></td>
            </tr>
          )
        })}
    </table>
  )
}

export default TodoItems