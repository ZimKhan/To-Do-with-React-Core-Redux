import * as ActionType from "../ActionTypes/TodoActionTypes";
const initialState = {
  todo: [],
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CREATE_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case ActionType.DELETE_TODO:
      // Logical portion
      const afterRemoved = state.todo.filter(function (todos) {
        return todos !== action.payload;
      });
      //
      console.log(afterRemoved);
      return {
        ...state,
        todo: afterRemoved,
      };

    default:
      return state;
  }
};
