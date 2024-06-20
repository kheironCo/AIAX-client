import { NavBar } from 'pages/landing/components';
import Registerimg from 'assets/imgs/registerImg.png';
import styles from './styles.module.css';
import {
  ButtonKUI,
  InputFieldCheckboxKUI,
  InputFieldPasswordKUI,
  InputFieldTextKUI,
} from 'kheiron-ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserRegister } from 'schema/User';

export const Register = () => {
  const {
    register: r,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(UserRegister) });

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.h1}>Sign Up</h1>
        <div className={styles.containerform}>
          <img className={styles.img} src={Registerimg} alt="Register image" />
          <form className={styles.form} onSubmit={handleSubmit((data) => console.log(data))}>
            <div className={styles.inTwoColumns}>
              <InputFieldTextKUI {...r('name')} label="Name" />
              <InputFieldTextKUI {...r('lastName')} label="Last Name" />
            </div>
            {JSON.stringify(errors)}
            <InputFieldTextKUI {...r('businessName')} label="Business name" />
            <InputFieldTextKUI {...r('email')} label="Email" />
            <InputFieldTextKUI {...r('phone')} label="Phone" />
            <InputFieldPasswordKUI {...r('password')} label="Password">
              pass
            </InputFieldPasswordKUI>
            <InputFieldPasswordKUI {...r('repeatPassword')} label="Repeat password">
              pass
            </InputFieldPasswordKUI>
            <br />
            <InputFieldCheckboxKUI
              {...r('terms')}
              label="Accept Kheiron terms and conditions"
              position="right"
            >
              Checkbox
            </InputFieldCheckboxKUI>
            <br />
            <div className={styles.button}>
              <ButtonKUI type="submit" onClick={() => console.log(errors)} palette="gold">
                Crear cuenta
              </ButtonKUI>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
