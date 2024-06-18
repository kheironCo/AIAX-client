import { NavBar } from 'pages/landing/components';
import imagenRegister from 'assets/imgs/registerImg.png';
import styles from './styles.module.css';
import { ButtonKUI, InputFieldCheckboxKUI, InputFieldTextKUI } from 'kheiron-ui';

export const Register = () => {
  return (
    <>
      <NavBar />
      <div className={styles.padre}>
        <h1 className={styles.h1}>Sign Up</h1>
        <div className={styles.juntoform}>
          <img className={styles.img} src={imagenRegister} alt="imagen de registro violeta" />
          <form className={styles.form}>
            <div className={styles.ordenarInputLineal}>
              <InputFieldTextKUI label="Nombre" />
              <InputFieldTextKUI label="Apellido" />
            </div>
            <InputFieldTextKUI label="Razón Social" />
            <InputFieldTextKUI label="Correo Electrónico" />
            <InputFieldTextKUI label="Teléfono" />
            <InputFieldTextKUI label="Contraseña" />
            <InputFieldTextKUI label="Repite la Contraseña" />
            <br />
            <InputFieldCheckboxKUI
              label="Aceptar terminos y condiciones de Kheiron"
              position="right"
            >
              Checkbox
            </InputFieldCheckboxKUI>
            <br />
            <div className={styles.button}>
              <ButtonKUI palette="gold">Crear cuenta</ButtonKUI>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
