import styles from '../styles/components/Cards.module.css';

export function Cards() {
  return (
    <section id={styles.balance}>
      <h2 className={styles.srOnly}>Balanço</h2>

      <div className={styles.card}>
        <h3>
          <span>Entradas</span>
          <img src="/icons/income.svg" alt="Imagem de entradas"/>
        </h3>
        <p>R$ 5.000,00</p>
      </div>

      <div className={styles.card}>
        <h3>
          <span>Saídas</span>
          <img src="/icons/expense.svg" alt="Imagem de saídas"/>
        </h3>
        <p>R$ 2.000,00</p>
      </div>

      <div id={styles.total} className={styles.card}>
        <h3>
          <span>Total</span>
          <img src="/icons/total.svg" alt="Imagem do total"/>
        </h3>
        <p>R$ 3.000,00</p>
      </div>
    </section>
  );
}