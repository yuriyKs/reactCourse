import { useState } from 'react'
import styles from './TodoForm.module.css'

function TodoForm(props) {
  const { addTodo } = props

  const [text, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()

    addTodo(text)
    setText('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter New Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default TodoForm
