/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['libs', 'node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'ts'],
  moduleNameMapper: {
    "^@libs/apiGateway(.*)$": "<rootDir>/src/libs/apiGateway.ts"
  }
};