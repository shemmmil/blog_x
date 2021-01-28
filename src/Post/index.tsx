import { lazy, Suspense } from "react";

export const Page = lazy(() =>
  import("./Page").then((module) => ({
    default: module.Page,
  }))
);

const PostList = lazy(() =>
  import("./List").then((module) => ({
    default: module.PostList,
  }))
);

export const Posts = () => (
  <Suspense fallback="Загружаем посты...">
    <PostList />
  </Suspense>
);
