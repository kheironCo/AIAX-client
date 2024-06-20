import { NavBar } from 'pages/landing/components';
import Registerimg from 'assets/imgs/registerImg.png';
import styles from './styles.module.css';
import { ButtonKUI, InputFieldCheckboxKUI, InputFieldTextKUI } from 'kheiron-ui';

export const Register = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.h1}>Sign Up</h1>
        <div className={styles.containerform}>
          <img className={styles.img} src={Registerimg} alt="Register image" />
          <form className={styles.form}>
            <div className={styles.inTwoColumns}>
              <InputFieldTextKUI label="Name" />
              <InputFieldTextKUI label="Last Name" />
            </div>
            <InputFieldTextKUI label="Business name" />
            <InputFieldTextKUI label="Email" />
            <InputFieldTextKUI label="Phone" />
            <InputFieldTextKUI label="Password" />
            <InputFieldTextKUI label="Repeat password" />
            <br />
            <InputFieldCheckboxKUI label="Accept Kheiron terms and conditions" position="right">
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
