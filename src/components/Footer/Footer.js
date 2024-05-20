import * as React from "react";
import {
  StyledFooter,
  StyledLogo,
  StyledFooterBody,
  StyledFooterCopyright,
  StyledIcon,
  StyledFooterBlobs,
  StyledPinkFujit,
} from "./Footer.styles.js";

import whitePurpleDecorativeBlobs from "../../images/decorative-blobs/white-purple-decorative-blobs.svg";

import pinkRoundTallFujit from "../../images/fujits/pink-round-tall-fujit.svg";

function Footer() {
  return (
    <StyledFooter>
      <StyledLogo version={"purple"} />
      <StyledFooterBody>
        <div>Fuji Digital Ltd.</div>
        <a href="mailto: contact@fujidigital.co.uk">
          contact@fujidigital.co.uk
        </a>
      </StyledFooterBody>
      <StyledIcon />
      <StyledFooterCopyright>
        Copyright © 2024 Fuji Digital Ltd. All rights reserved.
      </StyledFooterCopyright>
      <StyledFooterBlobs src={whitePurpleDecorativeBlobs} />
      <StyledPinkFujit src={pinkRoundTallFujit} />
    </StyledFooter>
  );
}

export default Footer;
