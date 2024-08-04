import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm(props) {
  const { addTodo } = props

  const [text, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (text) {
      addTodo(text)
      setText('')
    }
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter New Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="text submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
