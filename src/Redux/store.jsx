import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./Reducers/RootReducer";
import { todoReducer } from "./Reducers/TodoReducer";
export const Store = createStore(RootReducer, composeWithDevTools());
