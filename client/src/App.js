import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <>
      <div className="container">
        <TodoInput />
        
        <TodoItems />
      </div>
    </>
  );
}

export default App;
