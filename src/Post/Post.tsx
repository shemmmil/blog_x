import { lazy, Suspense } from "react";

import commentIcon from "../components/icons/comments.svg";
import { Post as PostType } from "./types";
import styles from "./styles/Post.module.scss";

const Comments = lazy(() =>
  import("./Comments").then((module) => ({
    default: module.Comments,
  }))
);

export type PostProps = Pick<PostType, "id" | "title">;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const Post = ({ id, title }: PostProps) => {
  const titleCapitalize = capitalizeFirstLetter(title);

  return (
    <article>
      <header>
        <h2 className={styles.title}>{titleCapitalize}</h2>
      </header>
      <footer>
        <section>
          <div className={styles.comments}>
            <img
              src={commentIcon}
              height="16"
              width="16"
              alt="comments count"
            />
            <Suspense fallback="Загружаем комментария">
              <Comments id={id} />
            </Suspense>
          </div>
        </section>
      </footer>
    </article>
  );
};
