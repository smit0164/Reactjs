import React, { useState } from 'react';

const TodoList = ({ todos, setTodos }) => {
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const deleteTodo = (id) => {
        const filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered);
    };

    const startEdit = (id, currentText) => {
        setEditId(id);
        setEditText(currentText);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const updated = todos.map((todo) =>
            todo.id === editId ? { ...todo, title: editText } : todo
        );
        setTodos(updated);
        setEditId(null);
        setEditText('');
    };

    return (
        <div className="space-y-3">
            {todos.length === 0 ? (
                <p className="text-center text-gray-400">No todos yet!</p>
            ) : (
                todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="flex items-center justify-between p-4 bg-gray-700 rounded-lg border border-gray-600 shadow hover:shadow-md transition"
                    >
                        {editId === todo.id ? (
                            <form onSubmit={handleUpdate} className="flex-1 mr-3 flex gap-2">
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                                />
                                <button
                                    type="submit"
                                    className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
                                >
                                    Save
                                </button>
                            </form>
                        ) : (
                            <>
                                <span className="text-white break-words flex-1">{todo.title}</span>

                                <div className="flex items-center space-x-4">
                                    {/* Edit Button */}
                                    <button
                                        onClick={() => startEdit(todo.id, todo.title)}
                                        className="text-teal-400 hover:text-teal-300 p-1 transition focus:outline-none"
                                        aria-label="Edit todo"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19.428 15.512a2.1 2.1 0 01-2.868-.11l-2.525-3.18a2.1 2.1 0 01-.3-1.949l.495-1.468a2.1 2.1 0 00-.417-2.104l-1.238-1.517a2.1 2.1 0 00-2.866.37l-1.128 1.51a2.1 2.1 0 00-.3 2.103l.495 1.468a2.1 2.1 0 01-.3 1.949l-2.526 3.18a2.1 2.1 0 01-2.868.11l-1.512-1.89a2.1 2.1 0 00-2.86.37l-1.238 1.517a2.1 2.1 0 00.372 2.865l.417 1.468a2.1 2.1 0 01.3 1.948l2.526 3.179a2.1 2.1 0 01.869.37l1.238-1.517a2.1 2.1 0 002.868-.37l1.128-1.51a2.1 2.1 0 00.3-2.103l-.495-1.468a2.1 2.1 0 01.3-1.949l2.525-3.18a2.1 2.1 0 01.869-.37l1.238 1.517a2.1 2.1 0 00.372-2.865l-.417-1.468a2.1 2.1 0 01-.3-1.949l-2.526-3.18a2.1 2.1 0 00-.869-.37l-1.238 1.517a2.1 2.1 0 00-2.868-.37l-1.128 1.51a2.1 2.1 0 00-.3 2.103l.495 1.468a2.1 2.1 0 01-.3 1.949l-2.526 3.18a2.1 2.1 0 01-.869.37z"
                                            />
                                        </svg>

                                    </button>


                                    {/* Delete Button */}
                                    <button
                                        onClick={() => deleteTodo(todo.id)}
                                        className="text-red-400 hover:text-red-300 p-1 transition focus:outline-none"
                                        aria-label="Delete todo"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>

                            </>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default TodoList;
