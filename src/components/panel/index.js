import React from "react";

import "./index.scss";

export default function Panel({ title, children }) {
  return (
    <div className="panel">
      <div className="title-wrapper">
        <div className="title-shape" />
        <h1>{title}</h1>
      </div>
      <div className="contents">
        {children}
        <div className="right-border" />
        <div className="bottom-border" />
      </div>
    </div>
  );
}
