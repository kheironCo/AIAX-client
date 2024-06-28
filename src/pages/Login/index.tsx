import { NavBar } from 'pages/landing/components';
import styles from './style.module.css';
import { ButtonKUI, InputFieldPasswordKUI, InputFieldTextKUI } from 'kheiron-ui';
import keyimg from 'assets/imgs/imagenLlave.png';

export const Login = () => {
  return (
    <>
      <NavBar />
      <div className={styles.div}>
        <h2 className={styles.h2}>Login</h2>
        <div className={styles.container}>
          <form className={styles.form}>
            <div>
              <InputFieldTextKUI label="Name: " width="230px"></InputFieldTextKUI>
              <InputFieldPasswordKUI label="Password:" width="204px"></InputFieldPasswordKUI>
            </div>
            <div className={styles.groupButtons}>
              <ButtonKUI palette="primary">Login</ButtonKUI>
              <ButtonKUI palette="primary">¿Did you forget your password?</ButtonKUI>
            </div>
          </form>
          <img src={keyimg} alt="Imagen de llave" className={styles.imagen} />
        </div>

        <ButtonKUI palette="gold">Create new account</ButtonKUI>
      </div>
    </>
  );
};
