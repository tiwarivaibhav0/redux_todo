import { ADD, DELETE, EDIT, TRANSFER } from "./todoActions";

const initialstate = {
  completed: [],
};

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        completed: [...state.completed, { data: action.payload, completed: 0 }],
      };
    case EDIT:
      let tmpArray = state.completed;
      tmpArray[action.index].data = action.payload;
      return {
        ...state,
        completed: [...tmpArray],
      };
    case DELETE:
      return {
        ...state,
        completed: [...state.completed.filter((el, i) => i !== action.payload)],
      };
    case TRANSFER:
      let tmpArray2 = state.completed;
      tmpArray2[action.payload].completed =
        !tmpArray2[action.payload].completed;
      return {
        ...state,
        completed: [...tmpArray2],
      };
    default:
      return { ...state };
  }
};
