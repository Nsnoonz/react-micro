// App.jsx in host-app
import { useState } from "react";
import List from "app_components/List";
import Input from "app_components/Input";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onSubmit = () => {
    setTodos((prev) => [...prev, newTodo]);
    setNewTodo("");
  };

  return (
    <>
      <Input value={newTodo} onChange={setNewTodo} onSubmit={onSubmit} />
      <List items={todos} />
    </>
  );
}

export default App;