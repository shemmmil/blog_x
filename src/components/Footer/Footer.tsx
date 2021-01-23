import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>
        Copyright &copy;{" "}
        <a href="https://github.com/shemmmil" className={styles.github}>
          shemmmil
        </a>
      </small>
    </footer>
  );
};
