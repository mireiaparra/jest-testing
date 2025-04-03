import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@common/(.*)$': '<rootDir>/src/common/$1',
    '^@pods/(.*)$': '<rootDir>/src/pods/$1',
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@scenes/(.*)$': '<rootDir>/src/scenes/$1',
  },
};

export default config;