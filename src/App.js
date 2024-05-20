import * as React from "react";
import "./App.css";

import { Logo } from "./components/Logo/Logo";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

import pinkRoundShortFujit from "./images/fujits/pink-round-short-fujit.svg";
import designingImage from "./images/decorative-images/designing.svg";
import pinkPurpleDecorativeBlobs from "./images/decorative-blobs/pink-purple-decorative-blobs.svg";

function App() {
  return (
    <div className="pageStyling">
      <div className="header">
        <Logo version={"white"} />
      </div>
      <img
        src={pinkPurpleDecorativeBlobs}
        alt="A blue and pink blob"
        className="blobStyling"
      />
      <div className="body">
        <Card>
          <div className="cardLayout">
            <img
              src={designingImage}
              alt="Two cartoon people discussing work over a computer"
              className="designingImage"
            />
            <div className="textContainer">
              <h1>Under Construction</h1>
              <p>We are currently working hard on making an amazing website.</p>
              <p>Stay tuned...</p>
              <img
                src={pinkRoundShortFujit}
                alt="A Pink circle with a happy face with its arms in the air"
                className="pinkBlob"
              />
            </div>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default App;
