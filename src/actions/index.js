import { ADD_TODO, TOGGLE_TODO, DELETE, UPDATE } from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const deleteTodo = (id) => ({
  type: DELETE,
  id,
});

export const updateTodo = (id, text) => ({
  type: UPDATE,
  id,
  text,
});
