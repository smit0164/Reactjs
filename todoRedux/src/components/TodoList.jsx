//components/TodoList.jsx
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItems";

const TodoList = () => {
//callback function
  const selectTodos = (state) => state.todos; 
 
//extract the todos
  const returnedTodos = useSelector(selectTodos);
  console.log("returnedTodos", returnedTodos)
  const displayTodos = returnedTodos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ));
  return <div>{displayTodos}</div>;
};

export default TodoList;