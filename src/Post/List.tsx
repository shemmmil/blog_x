import { useQuery } from "react-query";

import { Post } from "./Post";
import { getPosts } from "./api/posts";
import { Post as PostType } from "./types";
import styles from "./styles/List.module.scss";

export const List = () => {
  const { status, data, isFetching, error } = useQuery<PostType[], Error>(
    "posts",
    getPosts
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>{error?.message}</div>;
  }

  return (
    <div>
      {data && (
        <ul className={styles.list}>
          {data.slice(0, 10).map((post) => (
            <li key={`post-${post.id}`} className={styles["list__item"]}>
              <Post id={post.id} title={post.title} />
            </li>
          ))}
        </ul>
      )}
      {isFetching && <p>updating...</p>}
    </div>
  );
};
