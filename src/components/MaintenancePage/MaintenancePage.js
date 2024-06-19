import {
  Header,
  PageStyling,
  Body,
  BlobStyling,
  CardLayout,
  DesigningImage,
  TextContainer,
  PinkRoundShortFujit,
} from "./MaintenancePage.styles";

import { StandardLogo } from "../Logo/StandardLogo/StandardLogo";
import { Card } from "../Card/Card";
import { Footer } from "../Footer/Footer";

import pinkRoundShortFujit from "../../images/fujits/pink-round-short-fujit.svg";
import designingImage from "../../images/decorative-images/designing.svg";
import pinkPurpleDecorativeBlobs from "../../images/decorative-blobs/pink-purple-decorative-blobs.svg";

export const MaintenancePage = () => {
  return (
    <PageStyling>
      <Header>
        <StandardLogo version={"white"} />
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
              <h1>Under Construction</h1>
              <p>We are currently working hard on making an amazing website.</p>
              <p>Stay tuned...</p>
              <PinkRoundShortFujit
                src={pinkRoundShortFujit}
                alt="A Pink circle with a happy face with its arms in the air"
              />
            </TextContainer>
          </CardLayout>
        </Card>
      </Body>
      <Footer />
    </PageStyling>
  );
};
