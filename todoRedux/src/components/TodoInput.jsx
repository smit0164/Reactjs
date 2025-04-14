import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    dispatch({
      type: "todos/addedTodo",
      payload: {
        id: Math.floor(Math.random() * 10000),
        item: todo,
      },
    });
    setTodo("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-2xl mx-auto mb-10 shadow-lg"
    >
      <input
        type="text"
        placeholder="Enter the task for today"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="flex-1 px-4 py-3 rounded-l-md outline-none bg-amber-50 text-black"
      />
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-r-md font-semibold"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoInput;
