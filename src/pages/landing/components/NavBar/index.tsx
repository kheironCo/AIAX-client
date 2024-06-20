import { NavLink, useNavigate } from 'react-router-dom';
import logo from 'assets/imgs/logo.svg';
import styles from './styles.module.css';
import { ButtonKUI } from 'kheiron-ui';

export const NavBar = () => {
  const navigate = useNavigate();
  function handleButtonLogin() {
    navigate('/login');
  }
  function handleClickLogo() {
    navigate('/');
  }
  const handleButtonSignUp = () => {
    navigate('/register');
  };

  return (
    <div>
      <nav className={styles.nav}>
        <img src={logo} alt="logo" onClick={handleClickLogo} className={styles.logo} />
        <div className={styles.fatherGroupNav}>
          <div className={styles.groupNav}>
            <NavLink to="/contacto" className={styles.navLinkStyle}>
              Contact
            </NavLink>
            <NavLink to="/producto" className={styles.navLinkStyle}>
              Product
            </NavLink>
            <NavLink to="/precios" className={styles.navLinkStyle}>
              Price
            </NavLink>
          </div>
          <div className={styles.groupButtons}>
            <ButtonKUI palette="gold" onClick={handleButtonLogin}>
              Login
            </ButtonKUI>
            <ButtonKUI onClick={handleButtonSignUp} palette="orange">
              Register
            </ButtonKUI>
          </div>
        </div>
      </nav>
    </div>
  );
};
