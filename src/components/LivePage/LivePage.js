import {
  Header,
  PageStyling,
  Body,
  BlobStyling,
  CardLayout,
  DiscussingImage,
  TextContainer,
  HashtagTag,
} from "./LivePage.styles";

import { Logo } from "../Logo/Logo";
import { Card } from "../Card/Card";
import { Footer } from "../Footer/Footer";

import discussingImage from "../../images/decorative-images/discussing.svg";
import pinkPurpleDecorativeBlobs from "../../images/decorative-blobs/pink-purple-decorative-blobs.svg";
import { ContactButton } from "../ContactButton/ContactButton.js";

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
                Lorem ipsum praesent ac massa at ligula reet est iaculis.
                Vivamus est mist aliquet elit ac nisl. Lorem ipsum praesent ac
                massa at ligula reet est iaculis. Vivamus est mist.
              </p>
            </TextContainer>
            <ContactButton text="Contact Us" />
          </CardLayout>
        </Card>
      </Body>
      <Footer />
    </PageStyling>
  );
};
