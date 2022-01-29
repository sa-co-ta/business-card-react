import React from "react";
import profile from "../images/profile.jpg";

export default function Info() {
  return (
    <div className="info">
      <img src={profile} alt="sacota.eth's avatar" className="info--pfp" />
      <div className="info--details">
        <h1>Sacota.eth</h1>
        <p className="info--subtitle">Developing Developer</p>
        <p className="info--url">
          <a href="sacota.eth">sacota.eth</a>
        </p>
      </div>
    </div>
  );
}
