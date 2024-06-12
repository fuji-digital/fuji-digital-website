module.exports = {
  moduleDirectories: ["./node_modules", "src"],
  // other important stuff
  setupFilesAfterEnv: ["./jest-setup.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/src/testing-config/svgTransformer.js",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/testing-config/defaultFileMock.js",
  },
};
