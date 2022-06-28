import React from "react";
import { SectionName } from "../UI/SectionNames/SectionName";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
export function MainMarket() {
  return (
    <div>
      <SectionName subTitle="NFT Marketplace" icon="faFire">
        Super Hot Drops <FontAwesomeIcon icon={faFire} fontSize="1.3rem" />
      </SectionName>
      <div className="categories">
        <ul>
          <li>Music</li>
          <li>Art</li>
          <li>Sport</li>
          <li>Photography</li>
          <li>Virtual Reality</li>
          <li>Videos</li>
          <li>Other</li>
        </ul>
      </div>

      <div className="cards"></div>
    </div>
  );
}
