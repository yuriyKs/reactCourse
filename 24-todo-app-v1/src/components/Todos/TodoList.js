import { useState } from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList(props) {
  const { todos, deleteTodo } = props

  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todos is empty22</h2>}

      {todos.map((todo, index) => (
        <Todo
          key={index}
          todoName={todo}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
