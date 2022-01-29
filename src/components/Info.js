import React from "react";
import Profile from "../images/profile.jpg";

export default function Info() {
  return (
    <div className="info">
      <img
        src={Profile}
        alt="sacota.eth's profile picture"
        className="info--pfp"
      />
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
