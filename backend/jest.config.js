/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'babel',

  // The test environment that will be used for testing
  testEnvironment: 'node',

  collectCoverage: true,

  moduleFileExtensions: ['js', 'mjs'],

  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
  },

  testRegex: '((\\.|/*.)(test))\\.js?$',
}
