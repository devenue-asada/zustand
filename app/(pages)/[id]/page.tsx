import TodoDetailPage from "@/app/components/pages/TodoDetailPage";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  // ID がなければ 404 ページを表示
  const id = (await params).id;
  if (!params.id) return redirect("/");

  return <TodoDetailPage id={id} />;
}
