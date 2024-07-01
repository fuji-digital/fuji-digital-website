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
  StyledInputBox,
} from "./LivePage.styles";

import { Card } from "../Card/Card";
import { Footer } from "../Footer/Footer";
import { WhatWeDo } from "../WhatWeDo/WhatWeDo";
import { WhoAreWe } from "../WhoAreWe/WhoAreWe";
import { DesktopHeader } from "../Header/DesktopHeader/DesktopHeader";
import { MobileHeader } from "../Header/MobileHeader/MobileHeader";
import { Modal } from "../Modal/Modal";

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
        <Modal handleCrossClick={handleModalClick}>
          <StyledModal>
            <h3>Contact Us</h3>
            <StyledInputBox>
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter name here..."
              ></input>
            </StyledInputBox>

            <StyledInputBox>
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email here..."
              ></input>
            </StyledInputBox>

            <StyledInputBox>
              <label for="description">How can we help?</label>
              <textarea
                type="textarea"
                id="description"
                placeholder="Enter question here..."
              ></textarea>
            </StyledInputBox>
          </StyledModal>
        </Modal>
      )}
      {width < 768 ? <MobileHeader /> : <DesktopHeader />}
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
