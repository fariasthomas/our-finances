import styles from '../styles/components/Header.module.css';

export function Header() {
  return (
    <div className={styles.header}>
      <img src="./icons/logo.svg" alt="Logo"/>
    </div>
  );
}