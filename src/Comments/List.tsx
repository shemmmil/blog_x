import { useQuery } from "react-query";

import { Comment } from "./Comment";
import { Comment as CommentType } from "./types";
import { getComments } from "../api";
import { CommentsCounter } from "./Counter";
import styles from "./styles/List.module.scss";

export const List = ({ id }: { id: number }) => {
  const { status, data, error } = useQuery<CommentType[], Error>(
    ["comments", id],
    () => getComments(id),
    {
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
    }
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>{error?.message}</div>;
  }

  if (data === undefined) {
    return null;
  }

  return (
    <div>
      <CommentsCounter count={data.length} />
      <div className={styles.list}>
        {data.slice(0, 10).map((comment) => (
          <div key={`post-${comment.id}`} className={styles["list__item"]}>
            <div className={styles.avatar} />
            <Comment name={comment.name} body={comment.body} />
          </div>
        ))}
      </div>
    </div>
  );
};
