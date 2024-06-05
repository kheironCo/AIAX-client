import { NavLink } from 'react-router-dom';
import logo from '../imgs/logo.svg';
// import "./style.css"
import { styles } from './styles';
import { css } from '@emotion/react';

export const NavBar = () => {
  return (
    <div css={css(styles)}>
      <nav>
        <img src={logo} alt="logo" />
        <div>
          <div>
            <NavLink to="#">Contacto</NavLink>
            <NavLink to="#">Producto</NavLink>
            <NavLink to="#">Precios</NavLink>
          </div>
          <div>
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </nav>
    </div>
  );
};
