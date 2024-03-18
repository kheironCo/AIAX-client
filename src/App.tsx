import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LinkStyled from "./StyledComponents/LinkStyled";
import ButtonStyled from "./StyledComponents/ButtonStyled";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <LinkStyled href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </LinkStyled>
        <LinkStyled href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </LinkStyled>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ButtonStyled
          onClick={() => setCount((count) => count + 1)}
          $par={count % 2 === 0}
        >
          count is {count}
        </ButtonStyled>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
