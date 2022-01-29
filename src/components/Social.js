import React from "react";
import twittericon from "../images/twitter-icon.svg";
import githubicon from "../images/github-icon.svg";
import mirroricon from "../images/mirror-icon.svg";

export default function Social() {
  return (
    <aside className="social">
      <a href="https://twitter.com/sacota_creative" target="_blank">
        <img
          src={twittericon}
          alt="twitter logo linking to Sacota.eth's twitter profile"
        />
      </a>
      <a href="https://github.com/sa-co-ta" target="_blank">
        <img
          src={githubicon}
          alt="github logo linking to Sacota.eth's github repository"
        />
      </a>
      <a href="https://mirror.xyz/sacota.eth" target="_blank">
        <img
          src={mirroricon}
          alt="mirror logo linking to Sacota.eth's blog on mirror.xyz"
        />
      </a>
    </aside>
  );
}
