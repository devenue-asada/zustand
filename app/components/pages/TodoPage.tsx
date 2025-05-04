"use client";

import { useTodoStore } from "@/app/stores/todoStore";
import { useEffect, useState } from "react";
import TodoList from "../todo/TodoList";
import AddTodo from "../todo/AddTodo";

export const TodoPage = () => {
  const [addTitle, setAddTitle] = useState<string>("");
  const { setTodo, clearTodo } = useTodoStore();

  const getTodos = async () => {
    const res = await fetch("/api/todo");
    return await res.json();
  };

  useEffect(() => {
    (async () => {
      const res = await getTodos();
      setTodo(res);
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
