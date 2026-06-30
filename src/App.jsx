import React, { useState } from "react";
import "./App.css";
import InputContainer from "./Componets/InputContainer";
import TodoContainer from "./Componets/TodoContainer";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [tods, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal != "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }

  // Deleted todo
  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      }),
    );
  }
  // spread operator (...prevTodos) it merge
  console.log(tods);
  return (
    <main>
      <h1>To Do List </h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoContainer todos={tods} delTodo={delTodo}/>
    </main>
  );
}

export default App;
