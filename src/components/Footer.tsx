import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.copyright}>© {new Date().getFullYear()}</span>
        <span className={styles.author}>Ali Al-Abdullah</span>
      </div>

      <div className={styles.right}>
        <span className={styles.builtWith}>Built with React, Vite & TypeScript</span>
      </div>
    </footer>
  );
}
