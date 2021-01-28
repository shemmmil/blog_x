import { lazy, Suspense } from "react";
import { usePost } from "./hooks";
import { List as CommentList } from "../Comments";

const Content = lazy(() =>
  import("./components/Page").then((module) => ({ default: module.Content }))
);

export const Page = ({ id }: { id: number }) => {
  const { data } = usePost(id);

  return (
    <Suspense fallback="Загружаем...">
      <Content title={data?.title} body={data?.body} />
      <CommentList id={id} />
    </Suspense>
  );
};
