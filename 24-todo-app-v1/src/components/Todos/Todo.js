import { RiTodoFill } from 'react-icons/ri'
import styles from './Todo.module.css'

function Todo(props) {
  const { todoName, index, deleteTodo } = props

  return (
    <div
      className={styles.todo}
      onDoubleClick={() => {
        deleteTodo(index)
      }}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>Todo Component: {todoName}</div>
    </div>
  )
}

export default Todo
