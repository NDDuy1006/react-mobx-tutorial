import { observer } from "mobx-react-lite"
import TodoStore, { Todo } from "../../stores/TodoStore"
import classes from "./TodoList.module.css"

const TodoList = observer(({ todos }: { todos: TodoStore }) => {
    const toggleTodoListHandler = (t: Todo) => () => {
      todos.toggleTodo(t)
    }
    const removeTodoListHandler = (t: Todo) => () => {
      todos.removeTodo(t)
    }
    return (
      <ul>
        {todos.list.map(t => (
          <li key={t.id}>
            <label>{t.title}</label>
            <input type={'checkbox'}></input>
          </li>))}
      </ul>
    )
  }
)

export default TodoList