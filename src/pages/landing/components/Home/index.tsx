import { Article } from '../Article';
import { Article2 } from '../Article2';
import { Article3 } from '../Article3';
import styles from './styles.module.css';

export const Home = () => {
  return (
    <>
      <section>
        <div className={styles.main}>
          <div className={styles.tituloPadre}>
            <div className={styles.titulo}>
              <h1>Prueba AIAX Starter Suite gratis</h1>
              <button className={styles.btn}>Registrate</button>
            </div>
          </div>
          <div className={styles.bloque}></div>
        </div>
      </section>
      <Article />
      <Article2 />
      <Article3 />
    </>
  );
};
