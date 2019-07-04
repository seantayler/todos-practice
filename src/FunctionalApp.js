import React, { useState } from 'react';

const App = () => {

  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  const listOfTodos = todos.map((todo, index) => {
    return (
      <div style={{display: 'flex'}}>
        <div>
          <button style={{backgroundColor: 'red', marginRight: '10px'}} onClick={() => handleDelete(todo)}>delete</button>
          <button style={{backgroundColor: 'yellow', marginRight: '40px'}} onClick={() => handleComplete(index)}>complete</button>
        </div>
        <div>
          <li key={index} style={{marginRight: '40px', listStyle: 'none', textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            {todo.text}
          </li>
        </div>
      </div>
    )
  })

  function handleSubmit(e){
    e.preventDefault()
    setTodos([...todos, { text: newTodo, isCompleted: false } ])
    setNewTodo('')
  }

  function handleComplete(index){
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }

  function handleDelete(deletedTodo){
    const newTodos = todos.filter(todo => todo !== deletedTodo )
    setTodos(newTodos)
  }

  return (
    <div className="container">
      <h4><b>Todo List</b></h4>
      <form autocomplete="off" onSubmit={handleSubmit}>
        <input 
          name="todo" 
          value={newTodo}
          placeholder="Enter New Todo" 
          onChange={e => setNewTodo(e.target.value)}
        />
        <button style={{backgroundColor: 'lightgreen', marginLeft: '10px'}}>Submit</button>
      </form>
      <ul>  
        {listOfTodos}
      </ul>
    </div>
  );
}

export default App
