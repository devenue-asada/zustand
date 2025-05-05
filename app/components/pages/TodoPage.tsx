"use client";

import { useEffect } from "react";
import TodoList from "../todo/TodoList";
import { AddTodo } from "../todo/AddTodo";
import { selectActions, selectLoading, useTodoStore } from "@/app/stores/todo";

export const TodoPage = () => {
  const loading = useTodoStore(selectLoading);
  const { fetchTodos, clearTodo } = useTodoStore(selectActions);
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleClear = () => {
    clearTodo();
  };

  return (
    <div className="m-2">
      <TodoList />
      <AddTodo />
      <button
        type="button"
        className="bg-red-200 p-2 m-2 border-2 cursor-pointer"
        onClick={handleClear}
      >
        すべて削除
      </button>
    </div>
  );
};

export default TodoPage;
