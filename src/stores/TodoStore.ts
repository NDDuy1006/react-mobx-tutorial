import { action, makeObservable, observable } from "mobx"

export interface Todo {
  id: number
  title: string
  isDone: boolean
}

class TodoStore {
  list: Todo[] = []

  constructor() {
    makeObservable(this, {
      list: observable,
      addTodo: action,
      toggleTodo: action,
      removeTodo: action
    })
  }

  addTodo(title: string) {
    if (title.length < 3) {
      return
    }

    this.list.push({
      id: Date.now(),
      title,
      isDone: false
    })
  }

  toggleTodo(todo: Todo) {
    todo.isDone = !todo.isDone
  }

  removeTodo(todo: Todo) {
    this.list = this.list.filter(t => t.id !== todo.id)
  }
}

export default TodoStore