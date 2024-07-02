import { NavBar } from 'pages/landing/components';
import ImageRegister from 'assets/imgs/registerImg.png';
import styles from './styles.module.css';
import {
  ButtonKUI,
  InputFieldCheckboxKUI,
  InputFieldPasswordKUI,
  InputFieldTextKUI,
} from 'kheiron-ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserRegister, IUserRegister } from 'schema/User';
import { registerNew } from '../../config/firebase.js';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({ resolver: zodResolver(UserRegister) });

  const handleValidSubmit = async (data: IUserRegister) => {
    const { email, password } = data;
    try {
      const credencialUser = await registerNew({ email, password });

      if (credencialUser.operationType == 'signIn') {
        alert('Ha Registrado su cuenta!');
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
      alert('Error al crear cuenta');
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.h1}>Sign Up</h1>
        <div className={styles.containerform}>
          <img className={styles.img} src={ImageRegister} alt="Register image" />
          <form className={styles.form} onSubmit={handleSubmit(handleValidSubmit)}>
            <div className={styles.inTwoColumns}>
              <InputFieldTextKUI width="100%" {...register('name')} label="Name" />
              <InputFieldTextKUI width="100%" {...register('lastName')} label="Last Name" />
            </div>
            {errors.name?.message && <h6 className={styles.error}>{`${errors.name.message}`}</h6>}
            <InputFieldTextKUI {...register('businessName')} label="Business name" width="100%" />
            {errors.businessName?.message && (
              <h6 className={styles.error}>{`${errors.businessName.message}`}</h6>
            )}
            <InputFieldTextKUI {...register('email')} label="Email" width="100%" />
            {errors.email?.message && <h6 className={styles.error}>{`${errors.email.message}`}</h6>}
            <InputFieldTextKUI {...register('phone')} label="Phone" width="100%" />
            {errors.phone?.message && <h6 className={styles.error}>{`${errors.phone.message}`}</h6>}
            <InputFieldPasswordKUI {...register('password')} label="Password" width="100%" />
            {errors.password?.message && (
              <h6 className={styles.error}>{`${errors.password.message}`}</h6>
            )}
            <InputFieldPasswordKUI
              {...register('repeatPassword')}
              label="Repeat password"
              width="100%"
            />
            {errors.repeatPassword?.message && (
              <h6 className={styles.error}>{`${errors.repeatPassword.message}`}</h6>
            )}
            <br />
            <InputFieldCheckboxKUI
              {...register('terms')}
              label="Accept Kheiron terms and conditions"
              position="right"
            />
            {errors.terms?.message && <h6 className={styles.error}>{`${errors.terms.message}`}</h6>}
            <br />
            <div className={styles.button}>
              <ButtonKUI type="submit" palette="gold" label="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
