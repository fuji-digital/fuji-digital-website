module.exports = {
  moduleDirectories: ["./node_modules", "src"],
  // other important stuff
  setupFilesAfterEnv: ["./jest-setup.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    '^.+\\.svg$': '<rootDir>/src/testing-config/svgTransformer.js',
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|png|less)$": "<rootDir>/src/testing-config/defaultFileMock.js",
  },
};
