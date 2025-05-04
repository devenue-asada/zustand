"use client";

import { useTodoStore } from "@/app/stores/todoStore";
import { useEffect } from "react";
import TodoList from "../todo/TodoList";
import AddTodo from "../todo/AddTodo";

export const TodoPage = () => {
  const { setTodoList, clearTodo } = useTodoStore();

  const getTodos = async () => {
    const res = await fetch("/api/todo");
    return await res.json();
  };

  useEffect(() => {
    (async () => {
      const res = await getTodos();
      setTodoList(res);
    })();
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
