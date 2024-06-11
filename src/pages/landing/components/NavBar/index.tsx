import { NavLink } from 'react-router-dom';
import logo from '../imgs/logo.svg';
import styles from './styles.module.css';

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
          <div>
            <button className={styles.btnLogin}>Login</button>
            <button className={styles.btnRegister}>Register</button>
          </div>
        </div>
      </nav>
    </div>
  );
};
