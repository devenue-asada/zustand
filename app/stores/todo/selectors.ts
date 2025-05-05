import { TodoState } from "./store";

export const selectTodos = (state: TodoState) => state.todos;
export const selectLoading = (state: TodoState) => state.loading;
export const selectError = (state: TodoState) => state.error;
export const selectActions = (state: TodoState) => state.actions;

export const selectTodoState = (state: TodoState) => ({
  todos: state.todos,
  loading: state.loading,
  error: state.error,
});

// Other more specific selectors
export const selectTodoById = (id: string) => (state: TodoState) =>
  state.todos.find((todo) => todo.id === id);

export const selectCompletedTodos = (state: TodoState) =>
  state.todos.filter((todo) => todo.completed);

export const selectIncompleteTodos = (state: TodoState) =>
  state.todos.filter((todo) => !todo.completed);
