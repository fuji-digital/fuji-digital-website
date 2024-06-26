import { useWindowSize } from "@uidotdev/usehooks";
import {
  StyledBody,
  StyledContentContainer,
  StyledHeader,
  StyledInformationContainer,
  StyledIconContainer,
  StyledStaffPhoto,
  StyledAboutMe,
  CardContainer,
} from "./WhoAreWe.styles";
import { Card } from "../Card/Card";
import StaffPhotoEmily from "../../images/staff-photos/Emily.png";
import StaffPhotoGreg from "../../images/staff-photos/Greg.png";

export const WhoAreWe = () => {
  const { width } = useWindowSize();

  return (
    <StyledBody id="who-are-we">
      <Card>
        <StyledHeader>Who Are We?</StyledHeader>
        <CardContainer>
          <StyledInformationContainer>
            <StyledContentContainer>
              <StyledStaffPhoto
                src={StaffPhotoEmily}
                style={{ border: "5px solid #5E17EB" }}
              ></StyledStaffPhoto>
              <h3>Emily Buckley</h3> Senior Engineer
            </StyledContentContainer>
            <StyledIconContainer
              color="#fff"
              gitHubUrl="https://github.com/emilybuc"
              linkedInUrl="https://www.linkedin.com/in/emily-carter-buckley-a91a7118a/"
            />
            {width >= 550 && (
              <StyledAboutMe>
                Hey there! I'm Emily, 😊 an experienced Software Engineer,
                boasting a solid 5+ years track record at LEGO and RS
                Components. My passion lies in tackling challenges head-on and
                crafting innovative solutions that make a difference. Beyond
                work, I love to unwind by immersing myself in the captivating
                world of board games, keeping fit at the gym, and playing with
                my cat Hugo 😺
              </StyledAboutMe>
            )}
          </StyledInformationContainer>
          <StyledInformationContainer>
            <StyledContentContainer>
              <StyledStaffPhoto
                src={StaffPhotoGreg}
                style={{ border: "5px solid #F1A1E7" }}
              ></StyledStaffPhoto>
              <h3>Gregory Carter</h3> Junior Engineer
            </StyledContentContainer>
            <StyledIconContainer
              color="#fff"
              gitHubUrl="https://github.com/Gregamoo"
              linkedInUrl="https://www.linkedin.com/in/gregamo/"
            />
            {width >= 550 && (
              <StyledAboutMe>
                Hey, I'm Greg! 😄 I trained as a video game designer but pursued
                a career in software engineering, where I thrive on solving
                complex technical challenges. My game design background fuels my
                creativity and problem-solving skills in the tech world. Outside
                of work, I love spending time with my daughter, attending live
                concerts, playing video games, and reading manga. I also enjoy
                going to the gym when I have time. This blend of technical
                expertise and diverse interests keeps me inspired and engaged in
                all aspects of my life.🌟
              </StyledAboutMe>
            )}
          </StyledInformationContainer>
        </CardContainer>
      </Card>
    </StyledBody>
  );
};
