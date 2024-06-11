import styles from './styles.module.css';
import { arregloTypes } from './Types';

export const Confianza = ({ img, titulo, parrafo }: arregloTypes) => {
  return (
    <div className={styles.confianza}>
      <img src={img} alt="Imagen de manos" className={styles.img} />
      <h3>{titulo}</h3>
      <p>{parrafo}</p>
    </div>
  );
};
