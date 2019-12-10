const { defaults } = require("jest-config");
module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/__tests__/*.(ts|tsx)"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  }
};
