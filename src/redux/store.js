import { createStore } from "redux";
import { reducer } from "./todo/todoReducer";

export const store = createStore(reducer);
