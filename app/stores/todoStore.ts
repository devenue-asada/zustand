import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type Todo = {
  id: string;
  title: string;
  completed?: boolean;
  createdAt?: Date;
};

type TodoState = {
  todos: Todo[] | [];
  loading: boolean;
  error: string | null;
  actions: {
    fetchTodos: () => Promise<void>;
    setTodoList: (todos: Todo[]) => void;
    getTodo: (id: string) => Todo | undefined;
    addTodo: (todo: Todo) => void;
    clearTodo: () => void;
  };
};

export const useTodoStore = create<TodoState>()(
  devtools(
    immer((set, get) => ({
      todos: [],
      loading: false,
      error: null,

      actions: {
        // 一覧取得
        fetchTodos: async () => {
          try {
            set(
              { loading: true, error: null },
              false,
              "todo/fetchTodos/pending"
            );
            const res = await fetch("/api/todo");
            const data = await res.json();
            set(
              { todos: data, loading: false },
              false,
              "todo/fetchTodos/fulfilled"
            );
          } catch (e) {
            set(
              { loading: false, error: "取得に失敗しました" },
              false,
              "todo/fetchTodos/rejected"
            );
          }
        },
        setTodoList: (todos) => set({ todos }, false, "todo/setTodoList"),
        getTodo: (id) => {
          const { todos } = get();
          return todos.find((todo) => todo.id === id);
        },
        addTodo: (todo) =>
          set(
            (state) => ({
              todos: [...state.todos, todo],
            }),
            false,
            "todo/addTodo"
          ),
        clearTodo: () => set({ todos: [] }, false, "todo/clearTodo"),
      },
    })),
    {
      name: "TodoStore",
      trace: true,
    }
  )
);
