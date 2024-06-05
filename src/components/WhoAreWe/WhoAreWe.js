import {
  StyledBody,
  StyledContentContainer,
  StyledHeader,
  StyledInformationContainer,
  StyledSocialMediaIcons,
  StyledStaffPhoto,
} from "./WhoAreWe.styles";
import { Card } from "../Card/Card";
import StaffPhotoEmily from "../../images/StaffPhotos/Emily.jpeg";
import StaffPhotoGreg from "../../images/StaffPhotos/Greg.jpeg";
import { IconContainer } from "../SocialIcons/IconContainer";

export const WhoAreWe = () => {
  return (
    <StyledBody>
      <Card>
        <StyledHeader>Who Are We?</StyledHeader>
        <StyledInformationContainer>
          <StyledContentContainer>
            <StyledStaffPhoto
              src={StaffPhotoEmily}
              style={{ border: "5px solid #5E17EB" }}
            ></StyledStaffPhoto>
            <h3>Emily Buckley</h3> Senior Engineer
          </StyledContentContainer>
          <IconContainer
            color="#fff"
            gitHubUrl="https://github.com/emilybuc"
            linkedInUrl="https://www.linkedin.com/in/emily-carter-buckley-a91a7118a/"
          />
        </StyledInformationContainer>
        <StyledInformationContainer>
          <StyledContentContainer>
            <StyledStaffPhoto
              src={StaffPhotoGreg}
              style={{ border: "5px solid #F1A1E7" }}
            ></StyledStaffPhoto>
            <h3>Gregory Carter</h3> Junior Engineer
          </StyledContentContainer>
          <IconContainer
            color="#fff"
            gitHubUrl="https://github.com/Gregamoo"
            linkedInUrl="https://www.linkedin.com/in/gregamo/"
          />
        </StyledInformationContainer>
      </Card>
    </StyledBody>
  );
};
