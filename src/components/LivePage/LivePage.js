import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from "react";
import { motion } from "framer-motion";

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

  const fadeInOnLoad = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
      <BlobStyling src={pinkPurpleDecorativeBlobs} aria-hidden="true" />
      <Body>
        <motion.div initial="hidden" animate="visible" variants={fadeInOnLoad}>
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
                  Our software engineering contracting website connects
                  businesses with top-tier engineers, offering customized,
                  scalable solutions for projects, ensuring quality and
                  efficiency.
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
        </motion.div>
      </Body>
      <WhatWeDo />
      <WhoAreWe />
      <Footer />
    </PageStyling>
  );
};
