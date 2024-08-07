import {
  StyledDesktopHeader,
  StyledMenu,
  StyledSayHello,
} from "./DesktopHeader.styles";
import { StandardLogo } from "../../Logo/StandardLogo/StandardLogo";

export const DesktopHeader = ({ handleModalClick }) => {
  return (
    <StyledDesktopHeader>
      <StyledMenu>
        <StandardLogo />
        <a href="#what-we-do">What We Do</a>
        <a href="#who-are-we">Who Are We</a>
      </StyledMenu>

      <StyledSayHello text="Say Hello" handleModalClick={handleModalClick} />
    </StyledDesktopHeader>
  );
};
