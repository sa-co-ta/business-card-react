import React from "react";
import TwitterIcon from "../images/twitter-icon.svg";
import GithubIcon from "../images/github-icon.svg";
import MirrorIcon from "../images/mirror-icon.svg";

export default function Social() {
  return (
    <aside className="social">
      <a href="https://twitter.com/sacota_creative" target="_blank">
        <img src={TwitterIcon} />
      </a>
      <a href="https://github.com/sa-co-ta" target="_blank">
        <img src={GithubIcon} />
      </a>
      <a href="https://mirror.xyz/sacota.eth" target="_blank">
        <img src={MirrorIcon} />
      </a>
    </aside>
  );
}
