import { NextResponse } from "next/server";

const todos = [
  { id: 1, title: "買い物にいく" },
  { id: 2, title: "荷物出す" },
  { id: 3, title: "勉強する" },
];

export async function GET() {
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const data = await request.json();
  const { title } = data;

  if (!title) {
    return NextResponse.json({ error: "タイトルは必須です" }, { status: 400 });
  }

  // 新しいIDは既存の最大IDの次の番号
  const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), 0);
  const newTodo = {
    id: maxId + 1,
    title,
  };

  // 新しいTodoを配列に追加
  todos.push(newTodo);

  return NextResponse.json(newTodo);
}
