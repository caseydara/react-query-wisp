import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import PokemonPager from "./Pokemon";

function App() {
  return (
    <div className="App">
      <PokemonPager />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
