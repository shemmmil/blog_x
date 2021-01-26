import { usePost } from "./hooks";
import { List as CommentList } from "../Comments";

export const Page = ({ id }: { id: number }) => {
  const { status, data, isFetching, error } = usePost(id);

  if (!id || status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <article>
      {data && (
        <>
          <header>
            <h1>{data.title}</h1>
          </header>
          <section>
            <p>{data.body}</p>
          </section>
        </>
      )}
      {isFetching && <div>Background Updating...</div>}
      <CommentList id={id} />
    </article>
  );
};
