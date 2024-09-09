/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  resolver: 'ts-jest-resolver',
  preset: 'ts-jest',
  rootDir: './',
  testEnvironment: "jsdom",
  // setupFilesAfterEnv: [
  //   '<rootDir>/tests/setup-tests.js'
  // ],
  setupFiles: ['<rootDir>/tests/setup-tests.js'], 
  testMatch: [
    '<rootDir>/tests/**/*.test.ts*'
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transformIgnorePatterns: [
    "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['json', 'lcov', 'html'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts*'
  ],
};

