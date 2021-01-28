import { useComments } from "../Comments/hooks";
import styles from "./styles/Post.module.scss";

export const Comments = ({ id }: { id: number }) => {
  const { data } = useComments(id);

  return <span className={styles.count}>{data?.length}</span>;
};
