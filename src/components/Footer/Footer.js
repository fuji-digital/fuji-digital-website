import * as React from "react";
import {
  StyledFooter,
  StyledLogo,
  StyledFooterBody,
  StyledFooterCopyright,
  StyledIconContainer,
  StyledFooterBlobs,
  StyledPinkFujit,
} from "./Footer.styles.js";

import whitePurpleDecorativeBlobs from "../../images/decorative-blobs/white-purple-decorative-blobs.svg";

import pinkRoundTallFujit from "../../images/fujits/pink-round-tall-fujit.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledLogo version={"purple"} />
      <StyledFooterBody>
        <div>Fuji Digital Ltd.</div>
        <a href="mailto: contact@fujidigital.co.uk">
          contact@fujidigital.co.uk
        </a>
      </StyledFooterBody>
      <StyledIconContainer
        gitHubUrl="https://github.com/fuji-digital"
        linkedInUrl="https://www.linkedin.com/company/fuji-digital-tech/"
      />
      <StyledFooterCopyright>
        Copyright © 2024 Fuji Digital Ltd. All rights reserved.
      </StyledFooterCopyright>
      <StyledFooterBlobs src={whitePurpleDecorativeBlobs} />
      <StyledPinkFujit src={pinkRoundTallFujit} />
    </StyledFooter>
  );
};
