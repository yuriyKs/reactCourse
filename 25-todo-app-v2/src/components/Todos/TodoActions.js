import { RiRefreshLine, RiDeleteBin2Line } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodoActions.module.css'

function TodoActions({ resetTodos, deleteCompletedTodos, completedTodoExist }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={resetTodos}>
        <RiRefreshLine title="Refresh" />
      </Button>
      <Button onClick={deleteCompletedTodos} disabled={!completedTodoExist}>
        <RiDeleteBin2Line title="Delete" />
      </Button>
    </div>
  )
}

export default TodoActions
