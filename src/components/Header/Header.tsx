import styles from "./Header.module.scss";
import avatar from "../Avatar/avatar.webp";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.author}>
        <img alt="author" src={avatar} height="24" width="24" />
        <h4 className={styles.title}>Ivan Ivanov</h4>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.item}>Посты</li>
          <li className={styles.item}>Пользователи</li>
          <li className={styles.item}>Избранное</li>
        </ul>
      </nav>
    </header>
  );
};
