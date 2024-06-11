import { NavLink } from 'react-router-dom';
import logo from '../imgs/logo.svg';
import styles from './styles.module.css';
import { ButtonKUI } from 'kheiron-ui';

export const NavBar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <img src={logo} alt="logo" />
        <div className={styles.divDerechaNav}>
          <div className={styles.divChicoPadre}>
            <NavLink to="/contacto" className={styles.divChico}>
              Contacto
            </NavLink>
            <NavLink to="/producto" className={styles.divChico}>
              Producto
            </NavLink>
            <NavLink to="/precios" className={styles.divChico}>
              Precios
            </NavLink>
          </div>
          <div className={styles.separar}>
            <ButtonKUI palette="gold">Login</ButtonKUI>
            <ButtonKUI palette="orange">Register</ButtonKUI>
          </div>
        </div>
      </nav>
    </div>
  );
};
