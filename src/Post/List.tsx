import { lazy } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { getPosts } from "./api/posts";
import { Post as PostType } from "./types";
import styles from "./styles/List.module.scss";

const Post = lazy(() =>
  import("./Post").then((module) => ({
    default: module.Post,
  }))
);

export const PostList = () => {
  const { data } = useQuery<PostType[], Error>("posts", getPosts, {
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    suspense: true,
  });

  return (
    <div>
      <ul className={styles.list}>
        {data?.slice(0, 10).map((post) => (
          <li key={`post-${post.id}`} className={styles["list__item"]}>
            <Link to={`/post/${post.id}`} className={styles.link}>
              <Post id={post.id} title={post.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
