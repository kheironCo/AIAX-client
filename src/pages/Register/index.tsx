import { NavBar } from 'pages/landing/components';
import Registerimg from 'assets/imgs/registerImg.png';
import styles from './styles.module.css';
import {
  ButtonKUI,
  InputFieldCheckboxKUI,
  InputFieldPasswordKUI,
  InputFieldTextKUI,
} from 'kheiron-ui';
import { useState } from 'react';
import { register } from '../../config/firebase.js';
import { useNavigate } from 'react-router-dom';

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
  const { name, lastName, bussines, email, phone, password, repeatPassword } = user;

  function handleChangeregister(e: any) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const navigate = useNavigate();

  const handleSubmitRegister = async (e: any) => {
    e.preventDefault();
    try {
      const credencialUser = await register({ email, password });
      console.log(credencialUser);
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
        <div className={styles.containerform}>
          <img className={styles.img} src={Registerimg} alt="Register image" />
          <form className={styles.form} onSubmit={handleSubmitRegister}>
            <div className={styles.inTwoColumns}>
              <InputFieldTextKUI
                label="Name"
                name="name"
                value={name}
                onChange={handleChangeregister}
              />
              <InputFieldTextKUI
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleChangeregister}
              />
            </div>
            <InputFieldTextKUI
              label="Business name"
              width="361px"
              name="bussines"
              value={bussines}
              onChange={handleChangeregister}
            />
            <InputFieldTextKUI
              label="Email"
              value={email}
              width="361px"
              name="email"
              onChange={handleChangeregister}
            />
            <InputFieldTextKUI
              label="Phone"
              width="361px"
              name="phone"
              value={phone}
              onChange={handleChangeregister}
            />
            <InputFieldPasswordKUI
              label="Password"
              value={password}
              width="337px"
              name="password"
              onChange={handleChangeregister}
            />
            <InputFieldPasswordKUI
              label="Repeat password"
              width="337px"
              value={repeatPassword}
              name="repeatPassword"
              onChange={handleChangeregister}
            />
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
