import React from 'react';
import './App.css';
import { TodoList } from "./Components/todo_list";



function App() {
  const [todo_items, setTodoItems] = React.useState([
    { id: 1, text: 'EAT', done: false },
    { id: 2, text: 'SLEEP', done: true },
    { id: 3, text: 'CODE', done: false },
  ]);

  return (
    <div>
      <TodoList todos={todo_items} setTodos={setTodoItems} />
    </div>
  )
}

export default App;
