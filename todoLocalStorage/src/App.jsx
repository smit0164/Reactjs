import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const myTodos = localStorage.getItem('myTodos');
    if (myTodos) {
      const parsedTodos = JSON.parse(myTodos);
      if (parsedTodos && Array.isArray(parsedTodos)) {
        setTodos(parsedTodos);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myTodos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-10 text-white">
      <div className="bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl p-10 border border-gray-700">
        <h1 className="text-4xl font-extrabold text-center text-teal-400 mb-10">
          🌙 My Todo List
        </h1>

        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
