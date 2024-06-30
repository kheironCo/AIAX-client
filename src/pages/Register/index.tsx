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
    register,
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
              <InputFieldTextKUI {...register('name')} label="Name" />
              <InputFieldTextKUI {...register('lastName')} label="Last Name" />
            </div>
            {JSON.stringify(errors)}
            <InputFieldTextKUI {...register('businessName')} label="Business name" width="361px" />
            <InputFieldTextKUI {...register('email')} label="Email" width="361px" />
            <InputFieldTextKUI {...register('phone')} label="Phone" width="361px" />
            <InputFieldPasswordKUI {...register('password')} label="Password" width="337px" />
            <InputFieldPasswordKUI
              {...register('repeatPassword')}
              label="Repeat password"
              width="337px"
            />
            <br />
            <div className={styles.organizarCheck}>
              <InputFieldCheckboxKUI
                {...register('terms')}
                label="Accept Kheiron terms and conditions"
                position="right"
              >
                Checkbox
              </InputFieldCheckboxKUI>
            </div>
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
