import React from "react";
import { SectionName } from "../UI/SectionNames/SectionName";
import { OffertContent } from "./OffertContent";

export const Offert = () => {
  const subTitle = "Be An NFT Creator";
  const title = "Create & Sell Your NFTs";
  return (
    <React.Fragment>
      <SectionName subTitle={subTitle} fontSize="large">
        {title}
      </SectionName>
      <OffertContent />
    </React.Fragment>
  );
};
