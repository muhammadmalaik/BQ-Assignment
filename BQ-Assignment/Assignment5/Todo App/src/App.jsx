import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]); 
  const [text, setText] = useState("");  

  function addTodo() {
    if (text === "") return;       
    setTodos([...todos, text]);     
    setText("");                    
  }

  function deleteTodo(index) {
    const newTodos = [...todos];    
    newTodos.splice(index, 1);      
    setTodos(newTodos);             
  }

  function editTodo(index) {
    const updated = prompt("Edit task:", todos[index]); 
    if (updated) {
      const newTodos = [...todos];
      newTodos[index] = updated;   
      setTodos(newTodos);
    }
  }

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">📝 Todo App</h1>

        <div className="form">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a task..."
            className="input"
          />
          <button onClick={addTodo} className="btn">Add</button>
        </div>

        <ul className="list">
          {todos.length === 0 ? (
            <p className="empty">No tasks yet 🚀</p>
          ) : (
            todos.map((todo, i) => (
              <li key={i} className="item">
                <span className="text">{todo}</span>
                <button onClick={() => editTodo(i)} className="icon-btn">✏️</button>
                <button onClick={() => deleteTodo(i)} className="icon-btn danger">🗑️</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
