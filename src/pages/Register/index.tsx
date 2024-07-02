import { NavBar } from 'pages/landing/components';
import styles from './styles.module.css';
import {
  ButtonKUI,
  InputFieldCheckboxKUI,
  InputFieldPasswordKUI,
  InputFieldTextKUI,
} from 'kheiron-ui';
import { ChangeEvent, useState } from 'react';
import { registerNew } from '../../config/firebase.js';

import { useNavigate } from 'react-router-dom';
import Registerimg from '../../assets/imgs/registerImg.png';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserRegister, IUserRegister } from 'schema/User';
import { any } from 'zod';

export const Register = () => {
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    bussines: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
  });

  const {
    register,
    formState: { errors },
  } = useForm<IUserRegister>({ resolver: zodResolver(UserRegister) });

  const { name, lastName, bussines, email, phone, password, repeatPassword } = user;

  function handleChangeRegister(e: ChangeEvent<HTMLInputElement>): void {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const navigate = useNavigate();

  const handleSubmitRegister = async (e: any) => {
    e.preventDefault();
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

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.h1}>Sign Up</h1>
        <div className={styles.org}>
          <img className={styles.img} src={Registerimg} alt="Register image" />
          <form className={styles.form} onSubmit={handleSubmitRegister}>
            <div className={styles.containerform}>
              <InputFieldTextKUI
                width="100%"
                {...register('name')}
                label="Name"
                name="name"
                value={name}
                onChange={handleChangeRegister}
              />
              <InputFieldTextKUI
                width="100%"
                {...register('lastName')}
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleChangeRegister}
              />
            </div>
            {errors.name?.message && <h6 className={styles.error}>{`${errors.name.message}`}</h6>}
            <InputFieldTextKUI
              {...register('businessName')}
              label="Business name"
              width="100%"
              name="bussines"
              value={bussines}
              onChange={handleChangeRegister}
            />
            {errors.businessName?.message && (
              <h6 className={styles.error}>{`${errors.businessName.message}`}</h6>
            )}
            <InputFieldTextKUI
              {...register('email')}
              label="Email"
              width="100%"
              name="email"
              value={email}
              onChange={handleChangeRegister}
            />
            {errors.email?.message && <h6 className={styles.error}>{`${errors.email.message}`}</h6>}
            <InputFieldTextKUI
              {...register('phone')}
              label="Phone"
              width="100%"
              name="phone"
              value={phone}
              onChange={handleChangeRegister}
            />
            {errors.phone?.message && <h6 className={styles.error}>{`${errors.phone.message}`}</h6>}
            <InputFieldPasswordKUI
              {...register('password')}
              label="Password"
              width="100%"
              name="password"
              value={password}
              onChange={handleChangeRegister}
            />
            {errors.password?.message && (
              <h6 className={styles.error}>{`${errors.password.message}`}</h6>
            )}
            <InputFieldPasswordKUI
              {...register('repeatPassword')}
              label="Repeat password"
              width="100%"
              name="repeatPassword"
              value={repeatPassword}
              onChange={handleChangeRegister}
            />
            {errors.repeatPassword?.message && (
              <h6 className={styles.error}>{`${errors.repeatPassword.message}`}</h6>
            )}
            <br />
            <InputFieldCheckboxKUI label="Accept Kheiron terms and conditions" position="right" />
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
