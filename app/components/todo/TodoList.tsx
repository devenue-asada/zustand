"use client";

import { Todo, useTodoStore } from "@/app/stores/todoStore";
import { useEffect, useState } from "react";

export const TodoList = () => {
  const { todos } = useTodoStore();

  return (
    <>
      {todos.length ? (
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left font-semibold">ID</th>
              <th className="py-2 px-4 border-b text-left font-semibold">
                タスク名
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((v: Todo, i: number) => (
              <tr
                key={i}
                className={
                  i % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"
                }
              >
                <td className="py-2 px-4 border-b">{v.id}</td>
                <td className="py-2 px-4 border-b">{v.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>データがありません</div>
      )}
    </>
  );
};

export default TodoList;
