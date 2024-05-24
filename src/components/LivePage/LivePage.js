import {
  Header,
  PageStyling,
  Body,
  BlobStyling,
  CardLayout,
  DesigningImage,
  TextContainer,
} from "./LivePage.styles";

import { Logo } from "../Logo/Logo";
import { Card } from "../Card/Card";
import { Footer } from "../Footer/Footer";

import designingImage from "../../images/decorative-images/designing.svg";
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
            <DesigningImage
              src={designingImage}
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
          </CardLayout>
        </Card>
      </Body>
      <Footer />
    </PageStyling>
  );
};
