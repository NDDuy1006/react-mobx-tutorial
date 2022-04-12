import { ChangeEvent, useState } from "react"
import TodoStore from "../../stores/TodoStore"
import classes from "./TodoInput.module.css"

const TodoInput = ({ todos }: { todos: TodoStore }) => {
  const [newTodo, setNewTodo] = useState("")

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const buttonClickHandler = () => {
    todos.addTodo(newTodo)
    setNewTodo("")
  }

  return (
    <div className={classes["todo-input-wrapper"]}>
      <input value={newTodo} onChange={inputChangeHandler}></input>
      <button onClick={buttonClickHandler}>Add Todo</button>
    </div>
    
 )
}

export default TodoInput