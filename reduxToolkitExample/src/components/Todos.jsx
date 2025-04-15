import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="mt-6 bg-slate-700 rounded-md shadow-md p-4">
      <h2 className="text-xl font-bold mb-4 text-yellow-300 text-center">Todo List</h2>

      {todos.length === 0 ? (
        <p className="text-center text-gray-300">No todos yet. Add something! 🚀</p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-slate-600 px-4 py-2 rounded-md hover:bg-slate-500 transition"
            >
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
