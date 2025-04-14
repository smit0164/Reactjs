import React, { useState } from 'react';

const TodoForm = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();

    if (!todo.trim()) return; // prevent adding empty todos

    setTodos((prev) => [
      {
        id: Date.now(),
        title: todo,
        completed: false,
      },
      ...prev,
    ]);
    setTodo('');
  };

  return (
    <form onSubmit={addTodo} className="mb-6">
      <div className="flex items-center gap-3 bg-gray-700 p-4 rounded-lg shadow-md">
        <input
          type="text"
          autoFocus
          placeholder="What do you need to do?"
          className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button
          type="submit"
          className="bg-teal-500 text-white px-5 py-2 rounded-full hover:bg-teal-600 transition duration-200"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
