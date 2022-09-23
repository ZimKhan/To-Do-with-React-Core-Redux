import {
  CREATE_TODO,
  GET_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from "../ActionTypes/TodoActionTypes";
export const CreateTodoAction = (item) => {
  return {
    type: CREATE_TODO,
    payload: item,
  }
}
export const DeleteTodoAction = (item) => { 
  return {
    type: DELETE_TODO,
    payload:item,
  }
}
export const UpdateTodoAction = (item) => { 
  return {
    type: UPDATE_TODO,
    payload: item,
  };
}
