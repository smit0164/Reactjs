import { useDispatch } from "react-redux";




export default function TodoItem({todo}) {
    const dispatch = useDispatch();
    const onDelete = (id) => {
        return dispatch({
          type: "todos/deleteTodo",
          payload: id,
        });
    };
    const onComplete = (id) => {
        console.log(id)
        return dispatch({
          type: "todos/completeTodo",
          payload: id,
        });
    };
    return (
      <div className="bg-slate-800 text-white p-4 mb-4 border-2 border-yellow-300 rounded-md">
        <div className="flex justify-between items-center">
        <h3 className={`text-lg font-medium ${todo.completed ? "line-through text-gray-400" : ""}`}>
        {todo.item}
        </h3>
          <div className="flex space-x-2">
            <button className="bg-yellow-200 text-black px-3 py-1 rounded" onClick={() => onComplete(todo.id)}>Complete</button>
            <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
  