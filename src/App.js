import React from "react";
import Info from "./components/Info.js";
import Bio from "./components/Bio.js";
import Social from "./components/Social.js";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <article className="card">
        <Info />
        <Bio />
        <Social />
      </article>
    </div>
  );
}
