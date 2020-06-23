const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case "DELETE":
      return [...state].filter((todo) => todo.id != action.id);

    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );

    default:
      return state;
  }
};

export default todos;
