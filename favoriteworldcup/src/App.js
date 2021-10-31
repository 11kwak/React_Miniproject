import react from "react";
import { createGlobalStyle } from 'styled-components'
import Game from "./components/Game/Game";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


`


function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Game />

    </div>

  );
}

export default App;
