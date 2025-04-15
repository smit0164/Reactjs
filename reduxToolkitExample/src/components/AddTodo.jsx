import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-slate-700 rounded-md shadow-md"
    >
      <input
        type="text"
        placeholder="Enter a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-2 rounded-md text-black bg-amber-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-md font-semibold transition duration-200"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
