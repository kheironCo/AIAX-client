import { NavBar } from 'pages/landing/components';
import styles from './style.module.css';
import { ButtonKUI, InputFieldPasswordKUI, InputFieldTextKUI } from 'kheiron-ui';
import keyimg from 'assets/imgs/imagenLlave.png';
import { FormEvent, useState } from 'react';
import { login } from '../../config/firebase.js';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleSubmitLogin = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const credencialUser = await login({ email, password });
      if (credencialUser.operationType == 'signIn') {
        alert('Ha ingresado correctamente');
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
      alert('Error');
    }
  };

  return (
    <>
      <NavBar />
      <div className={styles.div}>
        <h2 className={styles.h2}>Login</h2>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmitLogin}>
            <div>
              <InputFieldTextKUI
                label="Name: "
                width="230px"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></InputFieldTextKUI>
              <InputFieldPasswordKUI
                label="Password:"
                width="204px"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              ></InputFieldPasswordKUI>
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
