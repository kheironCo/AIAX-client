// import "./styles.css"
import { NavLink } from 'react-router-dom';
import logo from '../imgs/logo.svg';
import { NavBarStyle } from './styles';

export const NavBar = () => {
  return (
    <div>
      <nav css={NavBarStyle}>
        <img src={logo} alt="logo" />
        <div className="divDerechaNav">
          <div className="divChicoPadre">
            <NavLink to="/contacto" className="divChico">
              Contacto
            </NavLink>
            <NavLink to="/producto" className="divChico">
              Producto
            </NavLink>
            <NavLink to="/precios" className="divChico">
              Precios
            </NavLink>
          </div>
          <div>
            <button className="btnLogin">Login</button>
            <button className="btnRegister">Register</button>
          </div>
        </div>
      </nav>
    </div>
  );
};
