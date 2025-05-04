"use client";

import { Todo, useTodoStore } from "@/app/stores/todoStore";
import { useEffect, useState } from "react";
import TodoList from "../todo/TodoList";
import AddTodo from "../todo/AddTodo";

export const TodoPage = ({ id }: { id: string }) => {
  const { getTodo } = useTodoStore();
  const [todo, setTodo] = useState<Todo | null>(null);
  useEffect(() => {
    // ページ遷移しているので今の仕組みではStateは保持できない
    // ここで詳細APIをfetch
    console.log(">>>", getTodo(id));
    // fetchしたデータをセット
    // setTodo(getTodo(id));
  }, []);

  return (
    <div className="m-2">
      {todo?.id}
      {todo?.title}
    </div>
  );
};

export default TodoPage;
