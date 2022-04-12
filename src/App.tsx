import TodoInput from "./components/TodoInput/TodoInput"
import  TodoList  from "./components/TodoList/TodoList";
import TodoStore from "./stores/TodoStore";

const todos = new TodoStore()

const App = () => {
  return (
    <div className="app">
      <TodoInput todos={todos}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
