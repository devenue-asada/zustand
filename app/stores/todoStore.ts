import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type Todo = {
  id: string;
  title: string;
  completed?: boolean;
  createdAt?: Date;
};

type TodoState = {
  todos: Todo[] | [];
  setTodoList: (todos: Todo[]) => void;
  addTodo: (todo: Todo) => void;
  clearTodo: () => void;
};

export const useTodoStore = create<TodoState>()(
  devtools(
    (set) => ({
      todos: [],
      setTodoList: (todos) => set({ todos }, false, "todo/setTodoList"),
      addTodo: (todo) =>
        set(
          (state) => ({
            todos: [...state.todos, todo],
          }),
          false,
          "todo/addTodo"
        ),
      clearTodo: () => set({ todos: [] }, false, "todo/clearTodo"),
    }),
    {
      name: "TodoStore",
      trace: true,
    }
  )
);

// addTodo: (title) =>
//      set(
//        (state) => ({
//          todos: [
//            ...state.todos,
//            {
//              id: crypto.randomUUID(),
//              title,
//              completed: false,
//              createdAt: new Date(),
//            },
//          ],
//        }),
//        false,
//        "todo/add"
//      ),
