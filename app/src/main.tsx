import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <h1 style={{ textAlign: "center", color: "red" }}>
    Netflix Clone – DevSecOps Platform
  </h1>
);

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(<App />);
