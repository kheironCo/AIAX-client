import { Confianza } from './Confianza';
import styles from './styles.module.css';

export const Article3 = () => {
  return (
    <article className={styles.art}>
      <section className={styles.section}>
        <h2 className={styles.h2}>¿Por qué AIAX CRM?</h2>

        <div className={styles.padreConfianza}>
          <Confianza />
          <Confianza />
          <Confianza />
        </div>
      </section>
    </article>
  );
};
