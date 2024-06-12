import styles from './styles.module.css';

export const Article2 = () => {
  return (
    <article className={styles.art}>
      <section className={styles.section}>
        <h2 className={styles.h2}>¿Como funciona AIAX CRM?</h2>
        <video controls>
          <source src="ruta/al/video.mp4" type="video/mp4" />
          <source src="ruta/al/video.ogg" type="video/ogg" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </section>
    </article>
  );
};
