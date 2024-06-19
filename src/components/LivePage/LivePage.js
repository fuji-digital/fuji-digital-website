import { useWindowSize } from "@uidotdev/usehooks";

import {
  Header,
  PageStyling,
  Body,
  BlobStyling,
  CardLayout,
  DiscussingImage,
  TextContainer,
  HashtagTag,
  StyledContactButton,
  StyledContactButtonContainer,
} from "./LivePage.styles";

import { CompactLogo } from "../Logo/CompactLogo/CompactLogo";
import { StandardLogo } from "../Logo/StandardLogo/StandardLogo";
import { Card } from "../Card/Card";
import { Footer } from "../Footer/Footer";
import { WhatWeDo } from "../WhatWeDo/WhatWeDo";
import { WhoAreWe } from "../WhoAreWe/WhoAreWe";
import { MobileMenu } from "../Menu/MobileMenu/MobileMenu";

import discussingImage from "../../images/decorative-images/discussing.svg";
import pinkPurpleDecorativeBlobs from "../../images/decorative-blobs/pink-purple-decorative-blobs.svg";

export const LivePage = () => {
  const { width } = useWindowSize();

  return (
    <PageStyling>
      <Header>
        {width <= 768 ? <CompactLogo /> : <StandardLogo version={"white"} />}
        <MobileMenu />
      </Header>
      <BlobStyling src={pinkPurpleDecorativeBlobs} alt="A blue and pink blob" />
      <Body>
        <Card>
          <CardLayout>
            <HashtagTag>#flexiblesolutions </HashtagTag>
            <DiscussingImage
              src={discussingImage}
              alt="Two cartoon people discussing work over a computer"
            />
            <TextContainer>
              <h1>Where Ideas Take Digital Form</h1>
              <p>
                Our software engineering contracting website connects businesses
                with top-tier engineers, offering customized, scalable solutions
                for projects, ensuring quality and efficiency.
              </p>
            </TextContainer>
            <StyledContactButtonContainer>
              <StyledContactButton text="Contact Us" />
            </StyledContactButtonContainer>
          </CardLayout>
        </Card>
      </Body>
      <WhatWeDo />
      <WhoAreWe />
      <Footer />
    </PageStyling>
  );
};
