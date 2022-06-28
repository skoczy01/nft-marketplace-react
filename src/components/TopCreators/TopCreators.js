import { SectionName } from "../UI/SectionNames/SectionName";
import { CreatorsContent } from "./CreatorsContent";

import React from "react";

export const TopCreators = () => {
  const subTitle = "NFT Creators";
  const title = "Top Creators of the week";

  return (
    <React.Fragment>
      <SectionName subTitle={subTitle} fontSize="large">
        {title}
      </SectionName>
      <CreatorsContent />
    </React.Fragment>
  );
};
