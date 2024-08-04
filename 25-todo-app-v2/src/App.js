import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodoActions from './components/Todos/TodoActions'

function App() {
  const [todos, setTodos] = useState([])

  const todoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length
  console.log(completedTodoCount)

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={todoHandler} />
      {!!todos.length && (
        <TodoActions
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
          completedTodoExist={!!completedTodoCount}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />

      {completedTodoCount > 0 && (
        <div>
          Completed {completedTodoCount > 1 ? ' todos ' : 'todo '}
          {completedTodoCount}
        </div>
      )}
    </div>
  )
}

export default App
