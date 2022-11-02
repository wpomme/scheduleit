const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  rootDir: ".",
  moduleNameMapper: {
    // set alias: refer compilerOptions of tsconfig.json
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
