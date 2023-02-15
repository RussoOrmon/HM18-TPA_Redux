const initialState = [
  { id: 1, title: "HTML", completed: false },
  { id: 2, title: "JS", completed: false },
  { id: 3, title: "React", completed: false },
];

export const todoActionTypes = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  DELETE_ALL: "DELETE_ALL",
  COMPLETED_TODO: "COMPLETED_TODO",
  EDIT_TODO: "EDIT_TODO",
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActionTypes.ADD_TODO:
      return [...state, action.payload];
    case todoActionTypes.DELETE_ALL:
      return [];
    case todoActionTypes.DELETE_TODO:
      const filteredTodo = state.filter((todo) => todo.id !== action.payload);
      return filteredTodo;

    case todoActionTypes.COMPLETED_TODO:
      const filterTodo = state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return filterTodo;

    default:
      return state;
  }
};
