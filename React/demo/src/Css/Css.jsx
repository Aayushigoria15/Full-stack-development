import React from "react";
import "./style.css";

function Css() {
  let internal = {
    background: "blue",
    color: "red",
  };

  return (
    <>
      <h1>Hello this css compo</h1>
      {/* 1) inline css :- tag 
      2) internal css :
      3) external css :- style */}

      {/* inline css */}
      <h1 style={{ background: "red", color: "blue" }}>
        Hello this inline css
      </h1>

      {/* inernal css */}
      <h1 style={internal}>Hello this internal css</h1>

      <h1 id="h1">Hello this external css</h1>

      <h2 id="h1">hello</h2>
    </>
  );
}

export default Css;
