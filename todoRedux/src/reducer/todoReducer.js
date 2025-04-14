const initialState = {
    todos: [
      {
        id: 1,
        item: "Learn redux fundamentals",
        completed: false,
      },
      {
        id: 2,
        item: "Build a todo-app",
        completed: false,
      },
    ],
  };
  //define the reducer logic
  const todoReducer = (state = initialState, action) => {
    console.log("inside the reducer",action);
    switch (action.type) {
  //logic to add a new todo
      case "todos/addedTodo":
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
  //logic to delete a todo
      case "todos/deleteTodo":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
  // logic to complete a todo
      case "todos/completeTodo":
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id === action.payload) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            } else {
              return todo;
            }
          }),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;