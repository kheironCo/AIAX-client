import { css } from '@emotion/react';

export const NavBarStyle = {
  styles: css`
    * {
      margin: 0;
      padding: 0;
    }

    nav {
      background-color: #583d6b;
      position: absolute;
      top: 0px;
      width: 98.5vw;
      height: 70px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      justify-content: space-between;
    }

    nav img {
      width: 120px;
    }

    .divisorNav {
      width: 50vw;
      background-color: aqua;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 30px;
    }
  `,
};
