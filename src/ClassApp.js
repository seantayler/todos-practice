//STEP 1: Setup Component
//STEP 2: Setup JSX
//STEP 3: Render List of Todos (Hardcoded)
//STEP 4: Add Todo Form
//STEP 5: Delete Todo Button
//STEP 6: Render List of Todos (API)
//STEP 7: Use Hooks

import React from 'react';

class App extends React.Component {

    state= {
        newTodo: '',
        todos: []
    }
  
    handleSubmit = (e) => {
      e.preventDefault()
      this.setState({ todos: [...this.state.todos, { text: this.state.newTodo, isCompleted: false }], newTodo: '' })
    }

    setNewTodo = e => {
        this.setState({ newTodo: e.target.value})
    }
  
    handleComplete = (index) => {
      const newTodos = [...this.state.todos];
      newTodos[index].isCompleted = true;
      this.setState({ todos: newTodos})
    }
  
    handleDelete = (deletedTodo) => {
      const newTodos = this.state.todos.filter(todo => todo !== deletedTodo )
      this.setState({ todos: newTodos})
    }
  
    render(){
        const listOfTodos = this.state.todos.map((todo, index) => {
            return (
                <div style={{display: 'flex'}}>
                    <div>
                        <button 
                            style={{backgroundColor: 'red', marginRight: '10px'}} 
                            onClick={() => this.handleDelete(todo)}
                        >
                            delete
                        </button>
                        <button 
                            style={{backgroundColor: 'yellow', marginRight: '40px'}} 
                            onClick={() => this.handleComplete(index)}
                        >
                            complete
                        </button>
                    </div>
                    <div>
                        <li key={index} style={{marginRight: '40px', listStyle: 'none', textDecoration: todo.isCompleted ? 'line-through' : ''}}>{todo.text}</li>
                    </div>
                </div>
            )
        })

        return (
          <div className="container">
            <h4><b>Todo List</b></h4>
            <form autocomplete="off" onSubmit={this.handleSubmit}>
              <input 
                name="todo" 
                value={this.state.newTodo}
                placeholder="Enter New Todo" 
                onChange={this.setNewTodo}
              />
              <button style={{backgroundColor: 'lightgreen', marginLeft: '10px'}}>Submit</button>
            </form>
            <ul>  
              {listOfTodos}
            </ul>
          </div>
        );
    }
}

export default App