import { NavBar } from 'pages/landing/components';
import styles from './style.module.css';
import { ButtonKUI, InputFieldPasswordKUI, InputFieldTextKUI } from 'kheiron-ui';
import imagenLlave from 'assets/imgs/imagenLlave.png';

export const Login = () => {
  return (
    <>
      <NavBar />
      <div className={styles.div}>
        <h2 className={styles.h2}>Login</h2>
        <div className={styles.contenedor}>
          <form action="" className={styles.formulario}>
            <InputFieldTextKUI label="Nombre: "></InputFieldTextKUI>
            <InputFieldPasswordKUI label="Contraseña:">Contraseña:</InputFieldPasswordKUI>
            <div className={styles.botones}>
              <ButtonKUI palette="primary">Ingresar</ButtonKUI>
              <ButtonKUI palette="primary">¿Olvidaste tu contraseña?</ButtonKUI>
            </div>
          </form>
          <img src={imagenLlave} alt="Imagen de llave" className={styles.imagen} />
        </div>
        <ButtonKUI palette="gold">Crear cuenta nueva</ButtonKUI>
      </div>
    </>
  );
};
