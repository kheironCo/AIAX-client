import imagenmanos from '../imgs/imagenmanos.png';
import styles from './styles.module.css';

export const Confianza = () => {
  return (
    <div className={styles.confianza}>
      <img src={imagenmanos} alt="Imagen de manos" />
      <h3>Confianza</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam consequuntur vero excepturi
        porro et inventore modi quas.
      </p>
    </div>
  );
};
