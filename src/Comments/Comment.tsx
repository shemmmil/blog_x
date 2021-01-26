import { Comment as CommentType } from "./types";
import styles from "./styles/Comment.module.scss";

export type CommentProps = Pick<CommentType, "name" | "body">;

export const Comment = ({ name, body }: CommentProps) => {
  return (
    <div>
      <p className={styles.name}>{name}</p>
      <p className={styles.text}>{body}</p>
    </div>
  );
};
