import { Post as PostType } from "./types";
import styles from "./styles/Post.module.scss";
import { useComments } from "../Comments/hooks";
import commentIcon from "../components/icons/comments.svg";

export type PostProps = Pick<PostType, "id" | "title">;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const Post = ({ id, title }: PostProps) => {
  const titleCapitalize = capitalizeFirstLetter(title);
  const { status, data, isFetching, error } = useComments(id);

  return (
    <article>
      <header>
        <h2 className={styles.title}>{titleCapitalize}</h2>
      </header>
      <footer>
        <section>
          {data && (
            <div className={styles.comments}>
              <img
                src={commentIcon}
                height="16"
                width="16"
                alt="comments count"
              />
              <span className={styles.count}>{data.length}</span>
            </div>
          )}
        </section>
      </footer>
    </article>
  );
};
