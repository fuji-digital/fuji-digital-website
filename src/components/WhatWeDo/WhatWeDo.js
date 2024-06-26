import {
  StyledHeader,
  StyledTextContainer,
  StyledBody,
  StyledFujit,
  StyledInformationContainer,
  StyledIconContainer,
  StyledReverseIconContainer,
} from "./WhatWeDo.styles";

import pinkStripeFujit from "../../images/fujits/pink-stripe-fujit.svg";
import purpleTallFujit from "../../images/fujits/purple-tall-fujit.svg";
import pinkRoundShortFujit from "../../images/fujits/pink-round-short-fujit.svg";

import awsIcon from "../../images/icons/aws-icon.svg";
import reactIcon from "../../images/icons/react-js-icon.svg";
import graphqlIcon from "../../images/icons/graphql-icon.svg";
import nodeIcon from "../../images/icons/node-js-icon.svg";

export const WhatWeDo = () => {
  return (
    <StyledBody id="what-we-do">
      <StyledHeader>What We Do</StyledHeader>
      <StyledInformationContainer>
        <StyledTextContainer>
          <StyledFujit src={pinkStripeFujit} />
          <p>
            At our software engineering company, we prioritize delivering
            top-tier work for every website we create. We tailor our solutions
            to meet the unique needs of each client, ensuring high-quality,
            functional, and visually appealing results.
          </p>
        </StyledTextContainer>
        <StyledReverseIconContainer>
          <StyledFujit src={purpleTallFujit} />
          <p>
            We utilize the latest technologies to stay ahead of industry trends.
            By leveraging cutting-edge tools and techniques, we guarantee
            efficient, innovative, and secure websites that perform optimally
            across all devices.
          </p>
        </StyledReverseIconContainer>
        <StyledTextContainer>
          <StyledFujit src={pinkRoundShortFujit} />
          <p>
            Our team prides itself on exceptional customer service and timely
            project completion. We maintain open communication, ensuring clients
            are informed and satisfied throughout the development process.
          </p>
        </StyledTextContainer>
      </StyledInformationContainer>
      <StyledIconContainer>
        <img src={awsIcon} alt="AWS Icon" />
        <img src={reactIcon} alt="React Icon" />
        <img src={graphqlIcon} alt="GraphQL Icon" />
        <img src={nodeIcon} alt="Node Icon" />
      </StyledIconContainer>
      <p>
        Our software stack includes React for dynamic front-end development,
        Node.js for robust back-end solutions, and JavaScript for seamless
        integration. We utilize AWS for reliable cloud services and GraphQL for
        efficient data management. Always eager to innovate, we continuously
        explore and adopt new technologies to enhance our offerings.
      </p>
    </StyledBody>
  );
};
