"use client";

import { useTodoStore } from "@/app/stores/todoStore";
import { useState } from "react";

export const AddTodo = () => {
  const { addTodo } = useTodoStore();
  const [title, setTitle] = useState<string>("");

  const handleAddTodo = async () => {
    if (!title) return;
    const res = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    const data = await res.json();
    addTodo(data);
    setTitle("");
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="border-2 p-2 m-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タスクを入力"
      />
      <button
        type="button"
        className="bg-blue-400 p-2 m-2 border-2 cursor-pointer"
        onClick={handleAddTodo}
      >
        タスクを追加する
      </button>
    </div>
  );
};

export default AddTodo;
