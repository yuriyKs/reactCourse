import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setTodo(json))
  }, [])

  return <div className="App">{todo && <div>{todo.title}</div>}</div>
}

export default App
