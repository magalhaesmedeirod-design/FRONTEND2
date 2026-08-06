import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.titulo}>Meu título</h1>
        <p>Página principal</p>
      </main>
    </div>
  );
}
