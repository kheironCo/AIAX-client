import { ButtonKUI } from 'kheiron-ui';
import styles from '../styles.module.css';

const Main = () => {
  return (
    <section>
      <div className={styles.main}>
        <div className={styles.tituloPadre}>
          <div className={styles.titulo}>
            <h1>Prueba AIAX Starter Suite gratis</h1>
            <ButtonKUI palette="gold" className={styles.btn}>
              Registrate
            </ButtonKUI>
          </div>
        </div>
        <div className={styles.bloque}></div>
      </div>
    </section>
  );
};

export default Main;
