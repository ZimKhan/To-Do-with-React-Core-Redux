import { combineReducers } from "redux";
import { modalReducer } from "./ModalReducer";
import { todoReducer } from "./TodoReducer";
const RootReducer = combineReducers({
  todos: todoReducer,
  Modal: modalReducer,
});

export default RootReducer;
