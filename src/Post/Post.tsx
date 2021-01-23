import { Post as PostType } from "./types";
import styles from "./styles/Post.module.scss";

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
    </article>
  );
};
