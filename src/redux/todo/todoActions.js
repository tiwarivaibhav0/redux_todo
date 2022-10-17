export const ADD = "ADD";
export const EDIT = "EDIT";
export const DELETE = "DELETE";
export const TRANSFER = "TRANSFER";

export const addTodo = (newTask) => {
  return {
    type: ADD,
    payload: newTask,
  };
};

export const editTodo = (newTask, i) => {
  return {
    type: EDIT,
    payload: newTask,
    index: i,
  };
};
export const deleteTodo = (i) => {
  return {
    type: DELETE,
    payload: i,
  };
};
export const transferTodo = (i) => {
  return {
    type: TRANSFER,
    payload: i,
  };
};
