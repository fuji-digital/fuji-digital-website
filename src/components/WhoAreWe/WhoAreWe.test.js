import renderer from "react-test-renderer";
import { WhoAreWe } from "./WhoAreWe";
import { render, screen } from "@testing-library/react";
import { useWindowSize } from "@uidotdev/usehooks";

jest.mock(`@uidotdev/usehooks`, () => ({
  useWindowSize: jest.fn(),
}));

jest.mock(`framer-motion`, () => ({
  ...jest.requireActual("framer-motion"),
  motion: {
    div: jest.fn().mockImplementation(({ children }) => <div>{children}</div>),
  },
}));

describe("WhoAreWe", () => {
  it("about me renders at 550px screen width", () => {
    useWindowSize.mockReturnValue({ width: 550 });

    render(<WhoAreWe />);
    const aboutMeEmily = screen.getByText(
      "Hey there! I'm Emily, 😊 an experienced Software Engineer, boasting a solid 5+ years track record at LEGO and RS Components. My passion lies in tackling challenges head-on and crafting innovative solutions that make a difference. Beyond work, I love to unwind by immersing myself in the captivating world of board games, keeping fit at the gym, and playing with my cat Hugo 😺"
    );
    expect(aboutMeEmily).toBeInTheDocument();

    const aboutMeGreg = screen.getByText(
      "Hey, I'm Greg! 😄 I trained as a video game designer but pursued a career in software engineering, where I thrive on solving complex technical challenges. My game design background fuels my creativity and problem-solving skills in the tech world. Outside of work, I love spending time with my daughter, attending live concerts, playing video games, and reading manga. I also enjoy going to the gym when I have time. This blend of technical expertise and diverse interests keeps me inspired and engaged in all aspects of my life.🌟"
    );
    expect(aboutMeGreg).toBeInTheDocument();
  });

  it("about me does not render below 550px screen width", () => {
    useWindowSize.mockReturnValue({ width: 540 });

    render(<WhoAreWe />);
    const aboutMeEmily = screen.queryByText(
      "Hey there! I'm Emily, 😊 an experienced Software Engineer, boasting a solid 5+ years track record at LEGO and RS Components. My passion lies in tackling challenges head-on and crafting innovative solutions that make a difference. Beyond work, I love to unwind by immersing myself in the captivating world of board games, keeping fit at the gym, and playing with my cat Hugo 😺"
    );
    expect(aboutMeEmily).not.toBeInTheDocument();

    const aboutMeGreg = screen.queryByText(
      "Hey, I'm Greg! 😄 I trained as a video game designer but pursued a career in software engineering, where I thrive on solving complex technical challenges. My game design background fuels my creativity and problem-solving skills in the tech world. Outside of work, I love spending time with my daughter, attending live concerts, playing video games, and reading manga. I also enjoy going to the gym when I have time. This blend of technical expertise and diverse interests keeps me inspired and engaged in all aspects of my life.🌟"
    );
    expect(aboutMeGreg).not.toBeInTheDocument();
  });

  it("matches snapshot", () => {
    useWindowSize.mockReturnValue({ width: 550 });

    const component = renderer.create(<WhoAreWe />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
