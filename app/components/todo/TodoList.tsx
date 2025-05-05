"use client";

import { selectTodos, useTodoStore } from "@/app/stores/todo";
import { useRouter } from "next/navigation";

export const TodoList = () => {
  const todos = useTodoStore(selectTodos);
  const router = useRouter();

  return (
    <>
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
          {todos.map((v, i: number) => (
            <tr
              key={v.id}
              className={
                i % 2 === 0
                  ? "bg-white cursor-pointer"
                  : "bg-gray-50 hover:bg-gray-100 cursor-pointer"
              }
              onClick={() => {
                router.push(`/${v.id}`);
              }}
            >
              <td className="py-2 px-4 border-b">{v.id}</td>
              <td className="py-2 px-4 border-b">{v.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
