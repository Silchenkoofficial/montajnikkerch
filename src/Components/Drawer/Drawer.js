import React from "react";
import "./Drawer.scss";

function Drawer({ toggleMenu }) {
  return (
    <div className="drawer" onClick={toggleMenu}>
      Drawer
    </div>
  );
}

export default Drawer;
