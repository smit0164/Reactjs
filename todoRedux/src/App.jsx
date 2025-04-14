import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-[#0d3b66] text-white px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-300 mb-6">Taskly</h1>
        <p className="text-lg mb-6 font-semibold">What would you like to do today?</p>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
