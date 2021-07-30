import React from "react";
import { Footer, Header } from "./Components";
import { MainPage } from "./Pages";

function Desktop() {
  return (
    <div className="wrapper">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default Desktop;
