import { NavBar } from 'pages/landing/components';
import Registerimg from 'assets/imgs/registerImg.png';
import styles from './styles.module.css';
import {
  ButtonKUI,
  InputFieldCheckboxKUI,
  InputFieldPasswordKUI,
  InputFieldTextKUI,
} from 'kheiron-ui';

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
            <InputFieldTextKUI label="Business name" width="361px" />
            <InputFieldTextKUI label="Email" width="361px" />
            <InputFieldTextKUI label="Phone" width="361px" />
            <InputFieldPasswordKUI label="Password" width="337px" />
            <InputFieldPasswordKUI label="Repeat password" width="337px" />
            <br />
            <div className={styles.organizarCheck}>
              <InputFieldCheckboxKUI label="Accept Kheiron terms and conditions" position="right">
                Checkbox
              </InputFieldCheckboxKUI>
            </div>
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
