import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'

function Todo(props) {
  const { todoName, deleteTodo, toggleTodo } = props

  return (
    <div
      className={`${styles.todo} ${
        todoName.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>Todo Component: {todoName.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => {
          deleteTodo(todoName.id)
        }}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => {
          toggleTodo(todoName.id)
        }}
      />
    </div>
  )
}

export default Todo
