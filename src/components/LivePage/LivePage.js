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

import { Logo } from "../Logo/Logo";
import { Card } from "../Card/Card";
import { Footer } from "../Footer/Footer";
import { WhatWeDo } from "../WhatWeDo/WhatWeDo";

import discussingImage from "../../images/decorative-images/discussing.svg";
import pinkPurpleDecorativeBlobs from "../../images/decorative-blobs/pink-purple-decorative-blobs.svg";

export const LivePage = () => {
  return (
    <PageStyling>
      <Header>
        <Logo version={"white"} />
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
      <Footer />
    </PageStyling>
  );
};
