import { useState } from "react";
import "./App.css";
import { Text } from "./Text";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { UserProfile } from "./UserProfile";

const user = {
  name: "yankeno",
  // hobbies: ["映画", "ゲーム"],
};
function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        setTodos(results);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>fetch</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default App;
