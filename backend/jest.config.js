/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  collectCoverage: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'mjs'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
  },
  testRegex: '((\\.|/*.)(test))\\.js?$',
}
