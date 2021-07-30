import React from "react";
import "./styles/PageWrapper.scss";

function PageWrapper({ children }) {
  return (
    <div className="page-wrapper">
      <div className="content">{children}</div>
    </div>
  );
}

export default PageWrapper;
