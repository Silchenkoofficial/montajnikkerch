import React from "react";
import { MainPage } from "./Pages";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Desktop from "./Desktop";

function App() {
  return (
    <React.Fragment>
      <Desktop />
    </React.Fragment>
  );
}

export default App;
