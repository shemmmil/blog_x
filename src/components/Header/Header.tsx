import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.author}>
        <img alt="author" />
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
