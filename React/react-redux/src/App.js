import TodoAdd from "./Todo/TodoAdd";
import TodoList from "./Todo/TodoList";

function App() {
  return (
    <div className="App">
      <h1> Hello Redux App</h1>
      <TodoAdd />
      <TodoList />
    </div>
  );
}

export default App;
