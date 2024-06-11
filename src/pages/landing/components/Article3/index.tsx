import { Confianza } from './Confianza';
import styles from './styles.module.css';
import imagenmanos from '../imgs/imagenmanos.png';

import { arregloTypes } from './Types';

const arregloCards: arregloTypes[] = [
  {
    img: imagenmanos,
    titulo: 'Confianza',
    parrafo:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam consequuntur vero excepturi porro ',
  },
  {
    img: imagenmanos,
    titulo: 'Confianza',
    parrafo:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam consequuntur vero excepturi porro ',
  },
  {
    img: imagenmanos,
    titulo: 'Confianza',
    parrafo:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam consequuntur vero excepturi porro ',
  },
];

export const Article3 = () => {
  return (
    <article className={styles.art}>
      <section className={styles.section}>
        <h2 className={styles.h2}>¿Por qué AIAX CRM?</h2>

        <div className={styles.padreConfianza}>
          {arregloCards.map((elemento, index) => (
            <Confianza
              key={index}
              img={elemento.img}
              titulo={elemento.titulo}
              parrafo={elemento.parrafo}
            />
          ))}
        </div>
      </section>
    </article>
  );
};
