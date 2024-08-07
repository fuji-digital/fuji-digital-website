import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from "react";

import {
  PageStyling,
  Body,
  BlobStyling,
  CardLayout,
  DiscussingImage,
  TextContainer,
  HashtagTag,
  StyledContactButton,
  StyledContactButtonContainer,
  StyledModal,
} from "./LivePage.styles";

import { Card } from "../Card/Card";
import { Footer } from "../Footer/Footer";
import { WhatWeDo } from "../WhatWeDo/WhatWeDo";
import { WhoAreWe } from "../WhoAreWe/WhoAreWe";
import { DesktopHeader } from "../Header/DesktopHeader/DesktopHeader";
import { MobileHeader } from "../Header/MobileHeader/MobileHeader";
import { EmailForm } from "../EmailForm/EmailForm";

import discussingImage from "../../images/decorative-images/discussing.svg";
import pinkPurpleDecorativeBlobs from "../../images/decorative-blobs/pink-purple-decorative-blobs.svg";

export const LivePage = () => {
  const { width } = useWindowSize();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <PageStyling>
      {isModalOpen && (
        <StyledModal handleCrossClick={handleModalClick}>
          <EmailForm />
        </StyledModal>
      )}
      {width < 768 ? (
        <MobileHeader handleModalClick={handleModalClick} />
      ) : (
        <DesktopHeader handleModalClick={handleModalClick} />
      )}
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
              <StyledContactButton
                text="Contact Us"
                handleModalClick={handleModalClick}
              />
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
